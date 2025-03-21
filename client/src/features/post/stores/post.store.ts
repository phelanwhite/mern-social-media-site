import { create } from 'zustand'
import axiosInstance from '@/configs/axios.config'
import { ResponseSuccessListType, ResponseSuccessType } from '@/utils/type'
import { PostStoreType, PostType } from '../types/post.type'

const baseUrl = `v1/post/`

export const usePostStore = create<PostStoreType>()((set, get) => ({
  datas: [],
  getAll: async (query = '') => {
    const url = baseUrl + `get-all?` + query
    const resp = (
      await axiosInstance.get<ResponseSuccessListType<PostType>>(url)
    ).data
    set({ datas: resp.data.results })
    return resp
  },
  getDatasByMe: async (query = '') => {
    const url = baseUrl + `get-me?` + query
    const resp = (
      await axiosInstance.get<ResponseSuccessListType<PostType>>(url)
    ).data
    set({ datas: resp.data.results })
    return resp
  },
  create: async (data) => {
    const url = baseUrl + `create`
    const resp = (
      await axiosInstance.post<ResponseSuccessType<PostType>>(url, data)
    ).data
    set({ datas: [resp.data, ...get().datas] })
    return resp
  },
  saveUnsave: async (post) => {
    const url = baseUrl + `save-unsave`
    const resp = (
      await axiosInstance.post<ResponseSuccessType<PostType>>(url, {
        post: post,
      })
    ).data
    return resp
  },
  deleteById: async (id) => {
    const url = baseUrl + `delete/${id}`
    const resp = (
      await axiosInstance.delete<ResponseSuccessType<PostType>>(url)
    ).data
    set({ datas: get().datas.filter((item) => item._id !== id) })
    return resp
  },
}))
