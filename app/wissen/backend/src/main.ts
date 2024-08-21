const config = useConfig();

import { createSchema, createYoga } from "graphql-yoga";
import { useConfig } from "./config";
import { GraphQLContext } from "./schema/context";
import { typeDefs } from "./schema/typeDefs.generated";

import { verifySession } from "./auth/service";
import { resolvers } from "./schema/resolvers.generated";

export const yoga = createYoga<GraphQLContext>({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  // context: async ({request}) => ({
  //   request,
  //   session: await verifySession(request),
  // }),
});


const server = Bun.serve({
  port: config.port,
  fetch: (request) => yoga(request),
});

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
);
