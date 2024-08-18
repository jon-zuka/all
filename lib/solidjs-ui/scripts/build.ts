import esbuild from "esbuild";
import packageJson from "../package.json";
import { emptyDir, copy } from "fs-extra/esm";
import path from "path";
import {
  Extractor,
  ExtractorConfig,
  ExtractorResult,
  IConfigFile,
} from "@microsoft/api-extractor";

import rootPackageJson from "../../../package.json";

const tsconfigJson = {
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
  },
}

const distPackageJson = {
  name: packageJson["name"].replace(/^@repo\//, "@repo/"),
  version: packageJson["version"],
  type: "module",
  private: false,
  peerDependencies: { "solid-js": rootPackageJson["dependencies"]["solid-js"] },
  exports: {
    ".": {
      import: "./main.jsx",
      require: "./main.cjsx",
    },
    "./css": "./assets/css/reset/tailwind-compact.css",
  },
  files: ["**/*"],
  main: "./main.cjs",
  module: "./main.js",
  types: "./main.d.ts",
};

const commonSettings = {
  entryPoints: ["src/main.ts"],
  outdir: "../../dist/solidjs-ui",
  bundle: true,
  treeShaking: true,
  target: ["ES2022"],
  external: ["solid-js"],
  jsx: "preserve",
  jsxFactory: "createSignal", // Adjust if needed based on SolidJS setup
  jsxFragment: "Fragment",
  jsxImportSource: "solid-js",
} satisfies esbuild.BuildOptions;

await emptyDir(commonSettings.outdir);
await emptyDir("./dist");

await esbuild.build({
  ...commonSettings,
  format: "esm",
  outExtension: { ".js": ".jsx" },

});

await esbuild.build({
  ...commonSettings,
  format: "cjs",
  outExtension: { ".js": ".cjsx" },
});

await Bun.write(
  `${commonSettings.outdir}/package.json`,
  JSON.stringify(distPackageJson, null, 2)
);

await Bun.write(
  `${commonSettings.outdir}/tsconfig.json`,
  JSON.stringify(tsconfigJson, null, 2)
);

await Bun.spawn({
  cmd: ["tsc", "--emitDeclarationOnly", "--declaration"],
  stdout: "inherit",
  stderr: "inherit",
}).exited;

copy("src/assets", `${commonSettings.outdir}/assets`);

const extractorConfigObject: IConfigFile = {
  compiler: {
    tsconfigFilePath: path.resolve(__dirname, "../tsconfig.json"), // Specify the path to your tsconfig.json
  },
  mainEntryPointFilePath: "./dist/main.d.ts",
  bundledPackages: ["solid-styled-components", "polished"],
  dtsRollup: {
    enabled: true,
    untrimmedFilePath: `${commonSettings.outdir}/main.d.ts`,
  },
  projectFolder: ".",
};

const extractorConfig = ExtractorConfig.prepare({
  configObjectFullPath: "",
  configObject: extractorConfigObject,
  packageJsonFullPath: path.resolve(__dirname, "../package.json"),
  projectFolderLookupToken: "../",
});

const extractorResult: ExtractorResult = Extractor.invoke(extractorConfig, {
  localBuild: true,
  showVerboseMessages: true,
});

if (extractorResult.succeeded) {
  console.log("API Extractor completed successfully");
} else {
  console.error(
    `API Extractor completed with ${extractorResult.errorCount} errors and ${extractorResult.warningCount} warnings`
  );
  process.exitCode = 1;
}
