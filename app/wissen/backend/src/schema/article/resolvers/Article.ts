import type { ArticleResolvers } from "./../../types.generated";
export const Article: ArticleResolvers = {
  author: async ({ authorFirstName, authorLastName }) =>
    `${authorFirstName} ${authorLastName}`,
  content: async ({ content }) => content,
  id: async ({ id }) => id,
  publishedAt: async ({ createdAt }) => createdAt,
};
