import { AiOutlineComment } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import {
  IoAlbumsOutline,
  IoSaveOutline,
  IoStopwatchOutline,
} from 'react-icons/io5'
import {
  MdOutlineAmpStories,
  MdOutlineArticle,
  MdOutlineGroup,
  MdOutlineHome,
} from 'react-icons/md'

export const header_links = {
  list1: [
    {
      icon: <MdOutlineHome />,
      name: 'Home',
      path: '/',
    },
    {
      icon: <MdOutlineGroup />,
      name: 'Friends',
      path: '/friends',
    },
    {
      icon: <MdOutlineAmpStories />,
      name: 'Stories',
      path: '/stories',
    },
  ],
  list2: [
    {
      icon: <HiOutlineUserGroup />,
      name: 'Groups',
      path: '/groups',
    },
    {
      icon: <AiOutlineComment />,
      name: 'Messages',
      path: '/messages',
    },
    {
      icon: <IoIosNotificationsOutline />,
      name: 'Notifications',
      path: '/notifications',
    },
  ],
}

export const nav_links = [
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
    icon: <IoAlbumsOutline />,
    name: 'Albums',
    path: '/albums',
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
    icon: <LiaBirthdayCakeSolid />,
    name: 'Birthdays',
    path: '/birthdays',
  },
  {
    icon: <MdOutlineGroup />,
    name: 'Friends',
    path: '/friends',
  },
  {
    icon: <HiOutlineUserGroup />,
    name: 'Groups',
    path: '/groups',
  },
  {
    icon: <AiOutlineComment />,
    name: 'Messages',
    path: '/messages',
  },
  {
    icon: <IoIosNotificationsOutline />,
    name: 'Notifications',
    path: '/notifications',
  },
]
