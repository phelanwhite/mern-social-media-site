import { create } from 'zustand'
import { PostFormStore } from '../types/post.type'

export const usePostFormStore = create<PostFormStore>()((set) => ({
  open: false,
  post: null,
  handleClose: () => set({ open: false }),
  handleOpen: () => set({ open: true }),
}))
