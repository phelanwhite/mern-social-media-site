import React, { memo } from 'react'
import { useAuthStore } from '@/features/authentication/stores/auth.store'
import { MdAddCircle } from 'react-icons/md'

const StoryCardButton = () => {
  const { user } = useAuthStore()
  return (
    <div className="bg-bgColorBox rounded-lg relative overflow-hidden aspect-9/13 cursor-pointer">
      <img src={user?.avatar} alt={user?.avatar} loading="lazy" />
      <div className="absolute bottom-0 right-0 left-0 h-10 bg-bgColorBox text-xs text-textColorSecondary text-center pt-3">
        <div className="absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-bgColorBox">
          <MdAddCircle size={24} />
        </div>
        Create story
      </div>
    </div>
  )
}

export default memo(StoryCardButton)
