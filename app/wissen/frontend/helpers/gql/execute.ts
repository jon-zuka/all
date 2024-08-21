import { sessionId } from "@/store/authStore";
import type { TypedDocumentString } from "./codegen/graphql";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> {
  const response = await fetch(import.meta.env.VITE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/graphql-response+json",
      "Authorization": `Bearer ${sessionId()}`
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Network response was not ok: ${response.status} ${response.statusText} - ${errorText}`
    );
  }

  const result = await response.json() as any;

  if (result.errors) {
    // const errorMessages = result.errors.map((error: { message: string }) => error.message).join(', ');
    // throw new Error(`GraphQL errors: ${errorMessages}`);
    throw new Error(result.errors[0].message);
  }

  return result.data as TResult;
}
