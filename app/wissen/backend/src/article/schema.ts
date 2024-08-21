import type { IResolvers } from "@graphql-tools/utils";
import { GraphQLContext } from "../graphql/types";

export const typeDefinitions = /* GraphQL */ `
  input UpdateArticle {
    content: String!
    id: String!
  }
`;

// export const resolvers: IResolvers = {
//   Mutation: {
//     async updateArticle(_, { input }, context: GraphQLContext) {
//       const userId = context.session?.userId;
//       await db.article.update({
//         where: {
//           userId,
//           id: input.id,
//           content: input.content,
//         },
//       });
//     },
//   },
// };
