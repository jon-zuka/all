import { createSelectSchema } from "drizzle-typebox";
import { articlesTable } from "../schema";
import { type Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { db } from "../../../db";
import { eq, and } from "drizzle-orm";
import { usersTable } from "../../users/schema";


const selectArticlesSchema = createSelectSchema(articlesTable);
const selectArticlesByIdAndAuthorIdSchema = Type.Pick(selectArticlesSchema, [
  "id",
  "authorId",
]);

export async function selectArticlesByIdAndAuthorId(
  data: Static<typeof selectArticlesByIdAndAuthorIdSchema>
) {
  Value.Assert(selectArticlesByIdAndAuthorIdSchema, data);
  return (
    await db
      .select({
        id: articlesTable.id,
        authorFirstName: usersTable.firstName,
        authorLastName: usersTable.firstName,
        authorId: articlesTable.authorId,
        createdAt: articlesTable.createdAt,
        content: articlesTable.content
      })
      .from(articlesTable)
      .innerJoin(usersTable, eq(articlesTable.authorId, usersTable.id))
      .where(
        and(
          eq(articlesTable.id, data.id),
          eq(articlesTable.authorId, data.authorId)
        )
      )
  )[0];
}
