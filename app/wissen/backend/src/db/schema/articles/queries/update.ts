import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { articlesTable } from "../schema";
import { Static, Type } from "@sinclair/typebox";
import { db } from "../../../db";
import { Value } from "@sinclair/typebox/value";
import { eq, and } from "drizzle-orm";

const selectArticlesSchema = createSelectSchema(articlesTable);
const updateArticlesByIdAndAuthorIdSchema = Type.Pick(selectArticlesSchema, [
  "id",
  "authorId",
  "content",
]);

export async function updateArticlesByIdAndAuthorId(
  data: Static<typeof updateArticlesByIdAndAuthorIdSchema>
) {
  Value.Assert(updateArticlesByIdAndAuthorIdSchema, data);
  return (await db
    .update(articlesTable)
    .set({ content: data.content })
    .where(
      and(
        eq(articlesTable.id, data.id),
        eq(articlesTable.authorId, data.authorId)
      )
    )
    .returning({ id: articlesTable.id }))[0];
}
