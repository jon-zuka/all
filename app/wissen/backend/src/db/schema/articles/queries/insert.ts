import { createInsertSchema } from "drizzle-typebox";
import { articlesTable } from "../schema";
import { Static, Type } from "@sinclair/typebox";
import { db } from "../../../db";
import { Value } from "@sinclair/typebox/value";

const insertArticleSchema = createInsertSchema(articlesTable);
const insertArticleWithAuthorIdAndContentSchema = Type.Pick(insertArticleSchema, [
  "authorId",
  "content"
]);

export async function insertArticleWithAuthorIdAndContent(
  data: Static<typeof insertArticleWithAuthorIdAndContentSchema>
) {
  Value.Assert(insertArticleWithAuthorIdAndContentSchema, data);
  return (
    await db
      .insert(articlesTable)
      .values({
        authorId: data.authorId,
        content: data.content
      })
      .returning({
        id: articlesTable.id,
      })
  )[0];
}
