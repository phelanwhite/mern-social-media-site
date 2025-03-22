import { create } from 'zustand'
import { CommentStoreType, CommentType } from '../types/comment.type'
import axiosInstance from '@/configs/axios.config'
import { ResponseSuccessType } from '@/utils/type'

const baseUrl = `v1/comment/`

export const useCommentStore = create<CommentStoreType>()((set, get) => ({
  comment: [],
  create: async (data) => {
    const url = baseUrl + `create`
    const resp = (
      await axiosInstance.post<ResponseSuccessType<CommentType>>(url, data)
    ).data

    if (resp.status === 201) {
      set({ comment: [resp.data, ...get().comment] })
    }
    return resp
  },
  deleteById: async (id) => {},
  getCommentsByPost: async (post) => {},
  getRepliesByComment: async (comment) => {},
}))
