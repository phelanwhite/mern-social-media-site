import React, { memo, useState } from 'react'
import { CommentType } from '../types/comment.type'
import { IMAGE_NOTFOUND } from '@/constants/image.constant'
import { Link } from 'react-router-dom'
import { displayTime } from '@/utils/time'
import CommentCreateUpdateForm from './CommentCreateUpdateForm'
import { useInfiniteQuery } from '@tanstack/react-query'
import { commentGetCommentIdApi } from '@/services/comment.api'

const CommentCard = ({ data }: { data: CommentType }) => {
  const [replyForm, setReplyForm] = useState(false)
  const [replyFetch, setReplyFetch] = useState(false)
  const getCommentGetCommentIdApiResult = useInfiniteQuery({
    queryKey: ['post', 'comment', 'replies', data._id],
    queryFn: async ({ pageParam }) =>
      await commentGetCommentIdApi(data._id as string, `_page=${pageParam}`),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (
        lastPage.data.results.length < lastPage.data.paginations.limit ||
        lastPage.data.paginations.current_page ===
          lastPage.data.paginations.total_pages
      ) {
        return null
      }
      return lastPageParam + 1
    },
    enabled: !!data._id && !!replyFetch,
  })

  return (
    <div className="flex items-start gap-4">
      <div className="w-8 aspect-square rounded-full overflow-hidden">
        <img
          src={data.user.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
          alt={data.user.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
          loading="lazy"
        />
      </div>
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          <div className="rounded-lg bg-gray-100 py-1 px-2 w-max">
            <Link to={`/profile/${data.user._id}`}>
              <h6>{data.user.name}</h6>
            </Link>
            {data.content && (
              <div
                className="whitespace-break-spaces"
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></div>
            )}
          </div>
          {data.file_url && (
            <div className="max-w-40 overflow-hidden rounded-lg">
              <img src={data.file_url} alt={data.file_url} loading="lazy" />
            </div>
          )}
          {/* actions */}
          <div className="text-xs font-medium space-x-2">
            <span>{displayTime(data.createdAt)}</span>
            <button>Like</button>
            <button onClick={() => setReplyForm(true)}>Reply</button>
            {data.total_replies > 0 && !replyFetch && (
              <button onClick={() => setReplyFetch(true)}>
                View {data.total_replies} replies
              </button>
            )}
          </div>
        </div>
        {getCommentGetCommentIdApiResult.data?.pages
          .flatMap((item) => item.data.results)
          .map((item) => (
            <CommentCard key={item._id} data={item} />
          ))}
        {getCommentGetCommentIdApiResult.hasNextPage && (
          <button
            onClick={() => getCommentGetCommentIdApiResult.fetchNextPage()}
          >
            View more replies
          </button>
        )}
        {replyForm && (
          <CommentCreateUpdateForm
            postId={data.post._id}
            commentId={data._id}
            isReply
          />
        )}
      </div>
    </div>
  )
}

export default memo(CommentCard)
