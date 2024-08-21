import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { sessionsTable } from "../schema";
import { Static, Type } from "@sinclair/typebox";
import { db } from "../../../db";
import { Value } from "@sinclair/typebox/value";
import { eq, and } from "drizzle-orm";

const insertSessionSchema = createInsertSchema(sessionsTable);
const insertSessionWithUserIdSchema = Type.Pick(insertSessionSchema, [
  "userId",
]);

export async function insertSessionWithUserId(
  data: Static<typeof insertSessionWithUserIdSchema>
) {
  Value.Assert(insertSessionWithUserIdSchema, data);
  return (
    await db
      .insert(sessionsTable)
      .values({
        userId: data.userId,
      })
      .returning({
        id: sessionsTable.id,
      })
  )[0];
}
