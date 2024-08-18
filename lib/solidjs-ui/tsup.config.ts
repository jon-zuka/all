import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    // minify: !options.watch,
    entry: ["src/main.ts"],
    format: ["esm", "cjs"],
    jsxFactory: "createSignal",
    jsxFragment: "Fragment",
    jsx: "preserve",
    jsxFactory: "createSignal", // Adjust if needed based on SolidJS setup
    jsxFragment: "Fragment",
    jsxImportSource: "solid-js",
    external: ["solid-js"],
    jsx: "preserve",

});
