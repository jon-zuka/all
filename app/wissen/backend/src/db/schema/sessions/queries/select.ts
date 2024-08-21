import { createSelectSchema } from "drizzle-typebox";
import { sessionsTable } from "../schema";
import { type Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { db } from "../../../db";
import { eq } from "drizzle-orm";

const selectSessionSchema = createSelectSchema(sessionsTable);
const selectSessionByIdSchema = Type.Pick(selectSessionSchema, ["id"]);

export async function selectSession(
  data: Static<typeof selectSessionByIdSchema>
) {
  Value.Assert(selectSessionByIdSchema, data);
  return (
    await db
      .selectDistinct({
        id: sessionsTable.id,
        userId: sessionsTable.userId,
      })
      .from(sessionsTable)
      .where(eq(sessionsTable.id, data.id))
  )[0];
}

// const insertUserSchema = createInsertSchema(usersTable)
// export type InsertUser = Static<typeof insertUserSchema>
// export async function insertUser(data: InsertUser) {
//   Value.Assert(insertUserSchema, data)
//   await db.insert(usersTable).values(data)
// }
