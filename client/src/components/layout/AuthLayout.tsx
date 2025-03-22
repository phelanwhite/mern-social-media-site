import clsx from 'clsx'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSaveOutline, IoStopwatchOutline } from 'react-icons/io5'
import {
  MdOutlineAmpStories,
  MdOutlineArticle,
  MdPassword,
} from 'react-icons/md'
import { RiUserLine } from 'react-icons/ri'
import { NavLink, Outlet } from 'react-router-dom'
import WrapperComponent from './WrapperComponent'

const auth_nav_links = [
  {
    name: 'Update Profile',
    path: '/update-profile',
    icon: <RiUserLine />,
  },
  {
    name: 'Change Password',
    path: '/change-password',
    icon: <MdPassword />,
  },
  {
    icon: <MdOutlineArticle />,
    name: 'My Post',
    path: '/post',
  },
  {
    icon: <IoStopwatchOutline />,
    name: 'Activity',
    path: '/activity',
  },
  {
    icon: <IoSaveOutline />,
    name: 'Saved',
    path: '/saved',
  },
  {
    icon: <MdOutlineAmpStories />,
    name: 'Stories',
    path: '/stories',
  },
  {
    icon: <IoIosNotificationsOutline />,
    name: 'Notifications',
    path: '/notifications',
  },
]

const AuthLayout = () => {
  return (
    <div className="max-w-[1032px] w-full mx-auto flex items-start gap-6">
      <div className="bg-bgColorBox p-3 rounded-lg max-w-xs w-full">
        <ul>
          {auth_nav_links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`/me` + item.path}
                className={({ isActive }) =>
                  clsx([
                    'py-2 px-4 flex items-center space-x-2 text-textColorSecondary transition-all duration-200 hover:bg-gray-100 rounded-lg',
                    isActive && 'bg-gray-100',
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
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
