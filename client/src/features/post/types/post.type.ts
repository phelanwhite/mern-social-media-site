import { UserType } from '@/features/authentication/types/user.type'

export type PostType = {
  _id: string
  user: UserType | null
  content: string
  file: string
  createdAt: string
  updatedAt: string

  isLiked: boolean
  totals_likes: number
  totals_comments: number
}
