export { typeDefinitions, resolvers };

import { IResolvers } from "@graphql-tools/utils";
import { GraphQLContext } from "../graphql/types";

const typeDefinitions = /* GraphQL */ `
  type Query {
    me: Me!
  }
  type Me {
    username: String!
    memberSince: String!
    email: String!
    avatarUrl: String!
    tier: String!
  }
`;

const resolvers: IResolvers = {
  Query: {
    async me(parent: unknown, args, context: GraphQLContext) {
      if (context.session?.id) {
        return {
          username: "tempest",
          memberSince: "12/12/12",
          email: "edura@tempest.wind",
          avatarUrl: "https://avatars.githubusercontent.com/u/16549839?v=4",
          tier: "free",
        };
      }
    },
  },
};
