import { UserType } from '@/features/authentication/types/user.type'
import { PostType } from '@/features/post/types/post.type'
import { ResponseSuccessListType, ResponseSuccessType } from '@/utils/type'

export type CommentType = {
  _id: string
  user: UserType
  content: string
  file_url: string
  total_replies: number

  createdAt: string
  updatedAt: string

  post: PostType
  comment: CommentType
}

export type CommentStoreType = {
  comment: CommentType[]
  create: (data: FormData) => Promise<ResponseSuccessType<CommentType>>
  deleteById: (id: string) => Promise<ResponseSuccessType<CommentType>>
  getCommentsByPost: (
    post: string,
  ) => Promise<ResponseSuccessListType<CommentType>>
  getRepliesByComment: (
    comment: string,
  ) => Promise<ResponseSuccessListType<CommentType>>
}
