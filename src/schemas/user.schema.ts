import { z } from 'zod'

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string()
})

export const UserListSchema = z.array(UserSchema)

export type User = z.infer<typeof UserSchema>