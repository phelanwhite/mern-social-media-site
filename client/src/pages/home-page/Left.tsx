import { Button } from '@/components/ui/button'
import { IMAGE_NOTFOUND } from '@/constants/image.constant'
import { nav_links } from '@/constants/link.constant'
import { useAuthStore } from '@/features/authentication/stores/auth.store'
import clsx from 'clsx'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Left = () => {
  const { user } = useAuthStore()
  return (
    <section className="max-w-xs w-full space-y-6">
      {/* card user */}
      <div className="bg-bgColorBox p-3 rounded-lg">
        <div className="relative">
          <div className="bg-gray-100 rounded overflow-hidden h-20">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ab86111-40c3-4c11-abf4-2c512a9b3c9d/dc57upu-d554f465-e877-4afc-89e4-b36e81bc4a9b.jpg/v1/fill/w_1024,h_613,q_75,strp/samurai_by_mattforsyth_dc57upu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEzIiwicGF0aCI6IlwvZlwvOGFiODYxMTEtNDBjMy00YzExLWFiZjQtMmM1MTJhOWIzYzlkXC9kYzU3dXB1LWQ1NTRmNDY1LWU4NzctNGFmYy04OWU0LWIzNmU4MWJjNGE5Yi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zNPdCb1Tq4f6awluE28wQ-L8qhjM8ZrfQUYBFr-2YmY"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="absolute -translate-y-[50%] left-[50%] -translate-x-[50%] bg-bgColorBox rounded-full p-0.5">
            <div className="rounded-full overflow-hidden aspect-square w-16 ">
              <img
                src={user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
                alt={user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center space-y-1">
          <h6>{user?.name}</h6>
          <p className="text-textColorSecondary">142 followers</p>
          <Link to={`/profile/` + user?._id}>
            <Button size={'sm'}>My Profile</Button>
          </Link>
        </div>
      </div>
      {/* nav list */}
      <div className="bg-bgColorBox p-3 rounded-lg">
        <ul>
          {nav_links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={() =>
                  clsx([
                    'py-2 px-4 flex items-center space-x-2 text-textColorSecondary',
                    'transition-all duration-200 hover:bg-gray-100 rounded-lg',
                  ])
                }
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Left
