export { insertSessionWithUserId } from "../schema/sessions/queries/insert";
export { insertArticleWithAuthorIdAndContent } from "../schema/articles/queries/insert";

// import { createInsertSchema } from 'drizzle-typebox'
// import {db} from '../db'
// import {usersTable} from '../schema'
// import { type Static } from '@sinclair/typebox'
// import { Value } from '@sinclair/typebox/value'

// const insertUserSchema = createInsertSchema(usersTable)
// export type InsertUser = Static<typeof insertUserSchema>
// export async function insertUser(data: InsertUser) {
//   Value.Assert(insertUserSchema, data)
//   await db.insert(usersTable).values(data)
// }
