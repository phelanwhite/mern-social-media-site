import React, { memo } from 'react'
import { IMAGE_NOTFOUND } from '@/constants/image.constant'
import { StoryType } from '../types/story.type'

const StoryCard = ({ data }: { data: StoryType }) => {
  return (
    <div className="bg-bgColorBox rounded-lg relative overflow-hidden aspect-story cursor-pointer">
      <img src={data.file_url} alt={data.file_url} loading="lazy" />
      <div className="absolute top-1 left-1 w-8 aspect-square rounded-full overflow-hidden">
        <img
          src={data.user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
          alt={data.user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default memo(StoryCard)
