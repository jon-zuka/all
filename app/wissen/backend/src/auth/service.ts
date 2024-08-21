import { GraphQLContext } from "../schema/context";
import { selectSession } from "@/db/queries/select";

export const verifySession = async (
  request: Request
): Promise<GraphQLContext["session"]> => {
  const header = request.headers.get("authorization");
  try {
    const sessionId = header?.split(" ")[1] ?? "";
    const session = await selectSession({
      id: sessionId,
    });
    return session;
  } catch {
    return undefined;
  }
};
