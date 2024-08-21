import { createSelectSchema } from "drizzle-typebox";
import { usersTable } from "../schema";
import { Static, Type } from "@sinclair/typebox";
import { db } from "../../../db";
import { Value } from "@sinclair/typebox/value";
import { eq, and } from "drizzle-orm";

const selectUserSchema = createSelectSchema(usersTable);

const selectUserByEmailAndPasswordSchema = Type.Pick(selectUserSchema, [
  "email",
  "password",
]);


const selectUserByIdSchema = Type.Pick(selectUserSchema, [
  "id",
]);

export async function selectUserById(
  data: Static<typeof selectUserByIdSchema>
) {
  try {
    Value.Assert(selectUserByIdSchema, data);
    return (
      await db
        .select({
          id: usersTable.id,
          firstName: usersTable.firstName,
          lastName: usersTable.lastName,
          isAdmin: usersTable.isAdmin
        })
        .from(usersTable)
        .where(eq(usersTable.id, data.id))
    )[0];

  } catch (error) {
    // TODO: Use tracing instead of console.error
    console.error(error);
    // TODO: Import Error from a reusable file
    throw new Error("somethingWentWrong");
  }
}

export async function selectUserByEmailAndPassword(
  data: Static<typeof selectUserByEmailAndPasswordSchema>
) {
  try {
    Value.Assert(selectUserByEmailAndPasswordSchema, data);
    const user = (
      await db
        .select({
          id: usersTable.id,
          password: usersTable.password,
        })
        .from(usersTable)
        .where(eq(usersTable.email, data.email))
    )[0];
    if (verifyPassword(data.password, user.password)) {
      return { id: user.id };
    } else {
      throw new Error("invalidPassword");
    }
  } catch (error) {
    // TODO: Use tracing instead of console.error
    console.error(error);
    // TODO: Import Error from a reusable file
    throw new Error("somethingWentWrong");
  }
}

// TODO: implement verify function for the password
function verifyPassword(_password: string, _hash: string) {
  return true;
}
