import { UserType } from '@/features/authentication/types/user.type'
import { ResponseSuccessListType, ResponseSuccessType } from '@/utils/type'

export type StoryType = {
  _id: string
  user: UserType | null
  file: string
  createdAt: string
  updatedAt: string
}

export type StoryFormStoreType = {
  open: boolean
  story: StoryType | null
  handleClose: () => void
  handleOpen: () => void
}

export type StoryStoreType = {
  datas: StoryType[]
  getDatasByMe: () => Promise<ResponseSuccessListType<StoryType>>
  create: (data: FormData) => Promise<ResponseSuccessType<StoryType>>
  deleteById: (id: string) => Promise<ResponseSuccessType<StoryType>>
}
