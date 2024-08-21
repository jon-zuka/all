import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  // hooks: { afterAllFileWrite: ["prettier --write"] },
  generates: {
    "src/schema": defineConfig({
      scalarsOverrides: {
        File: { type: "File" },
      },
      typesPluginsConfig: {
        contextType: './context#GraphQLContext'
      },
      resolverGeneration: {
        enum: "",
        query: "*",
        mutation: "*",
        subscription: "*",
        scalar: "!*.File",
        object: "*",
        union: "",
        interface: "",
      },
    }),
    
  },
};
export default config;
