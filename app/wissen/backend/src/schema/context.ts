import { YogaInitialContext } from "graphql-yoga";

export type Session = {
  id: string;
  userId: string;
};

export interface GraphQLContext extends YogaInitialContext {
  session: Session;
}