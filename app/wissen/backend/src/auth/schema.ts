import { IResolvers } from "@graphql-tools/utils";
import { signInWithPassword } from "./service";

export const typeDefinitions = /* GraphQL */ `
  input SignInWithPasswordInput {
    email: String!
    password: String!
  }
  type Session {
    sessionId: String!
  }
  type Mutation {
    signInWithPassword(input: SignInWithPasswordInput): Session!
  }
`;

export const resolvers: IResolvers = {
  Mutation: {
    async signInWithPassword(_, { input }) {
      return await signInWithPassword(input);
    },
  }
};

// input SignInWithSSO {
//   provider: SSOProvider
//   token: String!
// }
// enum SSOProvider {
//   GOOGLE
//   APPLE
//   MICROSOFT
// }

// type AuthPayload {

// }
