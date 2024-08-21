/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { book as Query_book } from './book/resolvers/Query/book';
import    { me as Query_me } from './user/resolvers/Query/me';
import    { selectArticle as Query_selectArticle } from './article/resolvers/Query/selectArticle';
import    { insertArticle as Mutation_insertArticle } from './article/resolvers/Mutation/insertArticle';
import    { markBookAsRead as Mutation_markBookAsRead } from './book/resolvers/Mutation/markBookAsRead';
import    { signInWithEmail as Mutation_signInWithEmail } from './session/resolvers/Mutation/signInWithEmail';
import    { updateArticle as Mutation_updateArticle } from './article/resolvers/Mutation/updateArticle';
import    { Article } from './article/resolvers/Article';
import    { Book } from './book/resolvers/Book';
import    { Session } from './session/resolvers/Session';
import    { User } from './user/resolvers/User';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { book: Query_book,me: Query_me,selectArticle: Query_selectArticle },
      Mutation: { insertArticle: Mutation_insertArticle,markBookAsRead: Mutation_markBookAsRead,signInWithEmail: Mutation_signInWithEmail,updateArticle: Mutation_updateArticle },
      
      Article: Article,
Book: Book,
Session: Session,
User: User,
DateTime: DateTimeResolver
    }