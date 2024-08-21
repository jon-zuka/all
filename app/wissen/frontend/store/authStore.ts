import { execute, graphql } from "@/helpers/gql";
import { type Maybe, type User } from "@/helpers/gql/codegen/graphql";
import { createSignal } from "solid-js";

// const SignInWithPasswordMutation = graphql(`
//   mutation SignInWithPassword($input: SignInWithPasswordInput!) {
//     signInWithPassword(input: $input) {
//       sessionId
//     }
//   }
// `);

const MeQuery = graphql(`
  query Me {
    me {
      id
      fullName
      isAdmin
    }
  }
`);

export const [sessionId, setSesssionId] = createSignal("");
export const [me, setMe] = createSignal<Maybe<User>>(null);

export const getMe = async () => {
  const { me } = await execute(MeQuery);
  setMe({
    fullName: me.fullName,
    // TODO: Do not leak user id maybe?
    id: me.id,
    isAdmin: me.isAdmin,
  });
};

export const signOut = () => {
  setSesssionId("");
  setMe(null);
};
