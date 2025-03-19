import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import React, { memo } from 'react'
import { useAuthStore } from '../stores/auth.store'

const AuthButtonMenu = () => {
  const { user } = useAuthStore()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-6 aspect-square overflow-hidden rounded-full">
          <img src={user?.avatar} alt={user?.avatar} loading="lazy" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Loggout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(AuthButtonMenu)
