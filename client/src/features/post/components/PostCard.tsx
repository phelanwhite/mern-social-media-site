import React, { memo } from 'react'
import { PostType } from '../types/post.type'
import { useAuthStore } from '@/features/authentication/stores/auth.store'
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

const data: PostType = {
  _id: '1',
  user: useAuthStore.getState().user,
  content: 'This is a test post',
  file: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab86111-40c3-4c11-abf4-2c512a9b3c9d/dc57upu-d554f465-e877-4afc-89e4-b36e81bc4a9b.jpg/v1/fill/w_1024,h_613,q_75,strp/samurai_by_mattforsyth_dc57upu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6IlwvZlwvOGFiODYxMTEtNDBjMy00YzExLWFiZjQtMmM1MTJhOWIzYzlkXC9kYzU3dXB1LWQ1NTRmNDY1LWU4NzctNGFmYy04OWU0LWIzNmU4MWJjNGE5Yi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zNPdCb1Tq4f6awluE28wQ-L8qhjM8ZrfQUYBFr-2YmY',
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  isLiked: false,
  totals_comments: 12,
  totals_likes: 12,
}

const PostCard = () => {
  return (
    <div className="p-3 rounded-lg bg-bgColorBox space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
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
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiDotsHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Save</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* main */}
      <div className="space-y-2">
        <div
          className="break-words "
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
        <div>
          <img src={data.file} alt={data.file} loading="lazy" />
        </div>
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
