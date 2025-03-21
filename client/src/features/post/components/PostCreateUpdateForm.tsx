import { ChangeEvent, memo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { MdClose, MdEmojiEmotions } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { useAuthStore } from '@/features/authentication/stores/auth.store'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { usePostFormStore } from '../stores/post.form.store'
import { PostType } from '../types/post.type'
import { usePostStore } from '../stores/post.store'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const PostCreateUpdateForm = () => {
  const { user } = useAuthStore()
  const { create } = usePostStore()
  const createResult = useMutation({
    mutationFn: async () => {
      const formData = new FormData()

      Object.entries(formValue).forEach(([key, value]) => {
        formData.append(key, value as string)
      })

      if (file) {
        formData.append('file', file)
      }
      return await create(formData)
    },
    onSuccess: (data) => {
      toast.success(data.message)
      onOpenChange()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { open, handleClose } = usePostFormStore()
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createResult.mutate()
  }
  const [formValue, setFormValue] = useState<Partial<PostType>>({
    content: '',
    file_url: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const onOpenChange = () => {
    handleClose()
    setFormValue({ content: '', file_url: '' })
    setFile(null)
  }
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        onOpenChange()
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create post?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 ">
          <div className="flex items-center gap-2">
            <div className="w-8 aspect-square rounded-full overflow-hidden">
              <img src={user?.avatar} alt={user?.avatar} loading="lazy" />
            </div>
            <div>
              <h6>{user?.name}</h6>
            </div>
          </div>
          <Textarea
            className="border-none outline-none"
            placeholder="What is your mind?"
            value={formValue.content}
            onChange={(e) =>
              setFormValue({ ...formValue, content: e.target.value })
            }
          />
          {/* files */}
          {file && (
            <div className="max-w-24 w-full relative overflow-hidden rounded-lg">
              <img src={URL.createObjectURL(file)} alt={file?.name} />
              <button
                className="absolute top-1 right-1 bg-gray-100 rounded-full"
                onClick={() => setFile(null)}
              >
                <MdClose />
              </button>
            </div>
          )}
          {/* actions */}
          <div className="flex items-center justify-between border rounded-lg py-2 px-3">
            <h6>Add to your post</h6>
            <div className="flex items-center gap-2">
              <label htmlFor="file" className="inline-block cursor-pointer">
                <AiFillFileImage size={16} />
                <input
                  accept="image/*"
                  type="file"
                  id="file"
                  name="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] as File)}
                />
              </label>
              <button type="button" className="">
                <MdEmojiEmotions size={18} />
              </button>
            </div>
          </div>
          <Button
            disabled={
              (!file && !formValue?.content) || createResult.isPending
                ? true
                : false
            }
            type="submit"
            className="w-full"
          >
            {createResult.isPending ? 'Loading...' : 'Create'}{' '}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default memo(PostCreateUpdateForm)
