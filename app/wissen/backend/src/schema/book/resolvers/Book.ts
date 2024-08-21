import type { BookResolvers } from "./../../types.generated";
export const Book: BookResolvers = {
  id: ({ id }) => id,
  isbn: ({ isbn }) => isbn,
};
