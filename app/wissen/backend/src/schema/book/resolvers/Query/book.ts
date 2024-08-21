import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers['book']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return {
    id: "a",
    isbn: "sd",
  };
  /* Implement Query.book resolver logic here */
};
