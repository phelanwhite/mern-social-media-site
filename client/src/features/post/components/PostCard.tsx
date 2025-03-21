import React, { memo, useEffect, useState } from 'react'
import { PostType } from '../types/post.type'
import { FaRegCommentAlt } from 'react-icons/fa'
import { displayTime } from '@/utils/time'
import { AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HiDotsHorizontal } from 'react-icons/hi'
import { IMAGE_NOTFOUND } from '@/constants/image.constant'
import { Link } from 'react-router-dom'
import { usePostStore } from '../stores/post.store'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const PostCard = ({ data }: { data: PostType }) => {
  const { saveUnsave, deleteById } = usePostStore()
  // save
  const [checkSave, setCheckSave] = useState(false)
  useEffect(() => {
    setCheckSave(data.isSaved)
  }, [data.isSaved])
  const saveUnsaveResult = useMutation({
    mutationFn: async () => saveUnsave(data._id),
    onSuccess: (data) => {
      toast.success(data.message)
      setCheckSave(!checkSave)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  // delete
  const deleteByIdResult = useMutation({
    mutationFn: async () => deleteById(data._id),
    onSuccess: (data) => {
      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  // copy
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `/post/${data._id}`)
    toast.success('Link copied to clipboard')
  }

  return (
    <div className="p-3 rounded-lg bg-bgColorBox space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <Link
          to={`/profile/` + data.user?._id}
          className="flex items-center gap-2"
        >
          <div className="aspect-square w-8 rounded-full overflow-hidden">
            <img
              src={data.user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
              alt={data.user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
              loading="lazy"
            />
          </div>
          <div>
            <h6>{data.user?.name}</h6>
            <p className="text-xs text-textColorSecondary">
              {displayTime(data.createdAt)}
            </p>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={() => deleteByIdResult.mutate()}>
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => saveUnsaveResult.mutate()}>
              {checkSave ? `Unsave` : `Save`}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={copyLink}>Copy link</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* main */}
      <div className="space-y-2">
        {data.content && (
          <div
            className="whitespace-break-spaces"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        )}
        {data.file_url && (
          <div>
            <img src={data.file_url} alt={data.file_url} loading="lazy" />
          </div>
        )}
      </div>
      {/* footer */}
      <div className="flex items-center justify-between gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-textColorSecondary text-xs">
          <AiOutlineLike />
          <p className="border-l-2 leading-none pl-2">
            {data.totals_comments} <span>Likes</span>
          </p>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-textColorSecondary text-xs">
          <FaRegCommentAlt />
          <p className="border-l-2 leading-none pl-2">
            {data.totals_comments} <span>Comments</span>
          </p>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-textColorSecondary text-xs">
          <RiShareForwardLine />
          <p className="border-l-2 leading-none pl-2">
            {data.totals_comments} <span>Share</span>
          </p>
        </button>
      </div>
    </div>
  )
}

export default memo(PostCard)
