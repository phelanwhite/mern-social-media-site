import { UserType } from '@/features/authentication/types/user.type'

export type StoryType = {
  _id: string
  user: UserType | null
  file: string
  createdAt: string
  updatedAt: string
}
