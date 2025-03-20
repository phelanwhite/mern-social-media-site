import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React, { memo } from 'react'
import { useAuthStore } from '../stores/auth.store'
import { Button } from '@/components/ui/button'
import { Link, NavLink } from 'react-router-dom'
import { IMAGE_NOTFOUND } from '@/constants/image.constant'
import { RiUserLine } from 'react-icons/ri'
import clsx from 'clsx'
import { MdLogout, MdPassword } from 'react-icons/md'

const user_links = [
  {
    name: 'Update Profile',
    to: '/update-profile',
    icon: <RiUserLine />,
  },
  {
    name: 'Change Password',
    to: '/change-password',
    icon: <MdPassword />,
  },
]

const AuthButtonMenu = () => {
  const { user, signout } = useAuthStore()
  if (!user)
    return (
      <Link to={`/signin`}>
        <Button size={'sm'}>Signin</Button>
      </Link>
    )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-6 aspect-square overflow-hidden rounded-full">
          <img
            src={user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
            alt={user?.avatar || IMAGE_NOTFOUND.AVATAR_NOTFOUND}
            loading="lazy"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user_links.map((item) => (
          <DropdownMenuItem key={item.name}>
            <NavLink
              to={'/me' + item.to}
              className={({ isActive }) => clsx([`flex items-center gap-2`])}
            >
              {item.icon} {item.name}
            </NavLink>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={signout}
          className={clsx([`flex items-center gap-2`])}
        >
          <MdLogout />
          Loggout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(AuthButtonMenu)
