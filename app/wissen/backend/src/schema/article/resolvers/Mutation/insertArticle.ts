import type { MutationResolvers } from "./../../../types.generated";
import { insertArticleWithAuthorIdAndContent } from "@/db/queries/insert";
export const insertArticle: NonNullable<MutationResolvers['insertArticle']> = async (_parent, arg, ctx) => {
  return (
    await insertArticleWithAuthorIdAndContent({
      authorId: ctx.session.id,
      content: arg.content,
    })
  ).id;
};
