import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["{pages,store}/**/*.{tsx,ts}"],
  config: {
    useTypeImports: true
  },
  generates: {
    "./helpers/gql/codegen/": {
      preset: "client",
      config: {
         documentMode: 'string'
       }
    },
    "./helpers/gql/codegen/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};
export default config;

// './schema.graphql': {
//    plugins: ['schema-ast'],
//    config: {
//      includeDirectives: true
//    }
//  }
