import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuthStore } from '@/features/authentication/stores/auth.store'
import { PostType } from '@/features/post/types/post.type'
import { HiDotsHorizontal } from 'react-icons/hi'

const data: PostType = {
  _id: '1',
  user: useAuthStore.getState().user,
  content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut similique reiciendis dicta esse. Dolorum sequi laudantium, perferendis voluptates optio hic. Id unde dolorum omnis, hic eligendi aperiam excepturi doloremque facilis!`,
  file: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab86111-40c3-4c11-abf4-2c512a9b3c9d/dc57upu-d554f465-e877-4afc-89e4-b36e81bc4a9b.jpg/v1/fill/w_1024,h_613,q_75,strp/samurai_by_mattforsyth_dc57upu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6IlwvZlwvOGFiODYxMTEtNDBjMy00YzExLWFiZjQtMmM1MTJhOWIzYzlkXC9kYzU3dXB1LWQ1NTRmNDY1LWU4NzctNGFmYy04OWU0LWIzNmU4MWJjNGE5Yi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zNPdCb1Tq4f6awluE28wQ-L8qhjM8ZrfQUYBFr-2YmY',
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  isLiked: false,
  totals_comments: 12,
  totals_likes: 12,
}

const Right = () => {
  return (
    <section className="max-w-xs w-full">
      {/* blogs */}
      <div className="p-3 rounded-lg bg-bgColorBox space-y-1">
        {/* header */}
        <div className="flex items-center justify-between mb-3">
          <h6>Ads</h6>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiDotsHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* main */}
        <div className="space-y-2">
          <div>
            <img src={data.file} alt={data.file} loading="lazy" />
          </div>
        </div>
        {/* user */}
        <div className="flex items-center gap-2">
          <div className="aspect-square w-6 rounded-full overflow-hidden">
            <img
              src={data.user?.avatar}
              alt={data.user?.avatar}
              loading="lazy"
            />
          </div>
          <div>
            <h6>{data.user?.name}</h6>
          </div>
        </div>
        {/* content */}
        <div
          className="break-words line-clamp-3 text-13"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </div>
    </section>
  )
}

export default Right
