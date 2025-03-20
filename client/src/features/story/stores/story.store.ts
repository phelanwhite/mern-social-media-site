import { create } from 'zustand'
import { StoryStoreType, StoryType } from '../types/story.type'
import axiosInstance from '@/configs/axios.config'
import { ResponseSuccessListType, ResponseSuccessType } from '@/utils/type'

const baseUrl = `story/`

export const useStoryStore = create<StoryStoreType>()((set, get) => ({
  datas: [],
  getDatasByMe: async () => {
    const url = baseUrl + `get-me`
    const resp = (
      await axiosInstance.get<ResponseSuccessListType<StoryType>>(url)
    ).data
    set({ datas: resp.data.results })
    return resp
  },
  create: async (data) => {
    const url = baseUrl + `create`
    const resp = (
      await axiosInstance.post<ResponseSuccessType<StoryType>>(url, data)
    ).data
    set({ datas: [resp.data, ...get().datas] })
    return resp
  },
  deleteById: async (id) => {
    const url = baseUrl + `delete/${id}`
    const resp = (
      await axiosInstance.delete<ResponseSuccessType<StoryType>>(url)
    ).data
    set({ datas: get().datas.filter((item) => item._id !== id) })
    return resp
  },
}))
