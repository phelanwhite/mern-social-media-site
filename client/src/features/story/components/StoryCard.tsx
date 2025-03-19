import React, { memo } from 'react'
import { StoryType } from '../types/story.type'
import { useAuthStore } from '@/features/authentication/stores/auth.store'

const data: StoryType = {
  _id: `1`,
  user: useAuthStore.getState().user,
  file: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab86111-40c3-4c11-abf4-2c512a9b3c9d/dc57upu-d554f465-e877-4afc-89e4-b36e81bc4a9b.jpg/v1/fill/w_1024,h_613,q_75,strp/samurai_by_mattforsyth_dc57upu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6IlwvZlwvOGFiODYxMTEtNDBjMy00YzExLWFiZjQtMmM1MTJhOWIzYzlkXC9kYzU3dXB1LWQ1NTRmNDY1LWU4NzctNGFmYy04OWU0LWIzNmU4MWJjNGE5Yi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zNPdCb1Tq4f6awluE28wQ-L8qhjM8ZrfQUYBFr-2YmY`,
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
}

const StoryCard = () => {
  return (
    <div className="bg-bgColorBox rounded-lg relative overflow-hidden aspect-9/13">
      <img src={data.file} alt={data.file} loading="lazy" />
      <div className="absolute top-1 left-1 w-8 aspect-square rounded-full overflow-hidden">
        <img src={data.user?.avatar} alt={data.user?.avatar} loading="lazy" />
      </div>
    </div>
  )
}

export default memo(StoryCard)
