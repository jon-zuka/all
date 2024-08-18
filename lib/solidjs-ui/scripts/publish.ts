// const npmRc = `//registry.npmjs.org/:_authToken=\${NPM_TOKEN}`;
// await Bun.write("../../dist/solidjs-ui/.npmrc", npmRc);

const exitCode = await Bun.spawn(["npm", "publish", "--access", "public"], {
  cwd: "../../dist/solidjs-ui",
  env: {
    NPM_TOKEN: Bun.env.NPM_TOKEN,
  },
}).exited;

if (exitCode !== 0) {
  throw new Error(`npm publish failed with exit code ${exitCode}`);
}

export {};
