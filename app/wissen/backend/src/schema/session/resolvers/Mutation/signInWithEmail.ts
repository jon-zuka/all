import type { MutationResolvers } from "./../../../types.generated";
import {selectUserByEmailAndPassword} from '@/db/queries/select'
import {insertSessionWithUserId} from '@/db/queries/insert'

export const signInWithEmail: NonNullable<MutationResolvers['signInWithEmail']> = async (_parent, arg, _ctx) => {
  const user = await selectUserByEmailAndPassword({
    email:arg.email,
    password: arg.password
  })
  return  await insertSessionWithUserId({
    userId: user.id
  })
};
