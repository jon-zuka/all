import {
  createSchema,
  createYoga,
  maskError,
  type YogaInitialContext,
} from "graphql-yoga";
import { verifySession } from "../auth/service";

import { typeDefs } from "../schema/typeDefs.generated";
import { resolvers } from "../schema/resolvers.generated";
// import { GraphQLContext } from "./context";

// import * as auth from "../auth/schema";
// import * as user from "../user/schema";




// maskedErrors: {
//   maskError(error, message, isDev) {
//     console.error(JSON.stringify(error, null, 2));
//     // if (error instanceof TypeBoxError) {
//     // return error
//     // }
//     return maskError(error, (error as Error).message, true);
//   },
// },
