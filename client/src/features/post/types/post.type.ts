import { UserType } from '@/features/authentication/types/user.type'
import { ResponseSuccessListType, ResponseSuccessType } from '@/utils/type'

export type PostType = {
  _id: string
  user: UserType | null
  content: string
  file_url: string
  createdAt: string
  updatedAt: string

  isLiked: boolean
  isSaved: boolean
  totals_likes: number
  totals_comments: number
}

export type PostFormStoreType = {
  open: boolean
  post: PostType | null
  handleClose: () => void
  handleOpen: () => void
}

export type PostStoreType = {
  datas: PostType[]
  getAll: (query?: string) => Promise<ResponseSuccessListType<PostType>>
  getDatasByMe: (query?: string) => Promise<ResponseSuccessListType<PostType>>
  create: (data: FormData) => Promise<ResponseSuccessType<PostType>>
  saveUnsave: (post: string) => Promise<ResponseSuccessType<PostType>>
  deleteById: (id: string) => Promise<ResponseSuccessType<PostType>>
}
