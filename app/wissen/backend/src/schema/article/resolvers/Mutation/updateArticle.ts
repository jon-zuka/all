import type { MutationResolvers } from "./../../../types.generated";
import { updateArticlesByIdAndAuthorId } from "@/db/queries/update";

export const updateArticle: NonNullable<MutationResolvers['updateArticle']> = async (_parent, arg, ctx) => {
  return (await updateArticlesByIdAndAuthorId({
    authorId: ctx.session.userId,
    content: arg.content,
    id: arg.id
  })).id;
};
