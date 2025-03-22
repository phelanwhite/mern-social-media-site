import AuthLayout from '@/components/layout/AuthLayout'
import ChangePasswordForm from '@/features/authentication/components/ChangePasswordForm'
import UpdateProfileForm from '@/features/authentication/components/UpdateProfileForm'
import MyPostPage from '@/pages/authentication-page/MyPostPage'
import MySavePage from '@/pages/authentication-page/MySavePage'
import MyStoryPage from '@/pages/authentication-page/MyStoryPage'
import HomePage from '@/pages/home-page'
import ProfileIdPage from '@/pages/profile-id-page'
import SigninSignupPage from '@/pages/signin-signup-page'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'

const MainRouter = () => {
  const router = useRoutes([
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'profile/:id',
      element: <ProfileIdPage />,
    },
    {
      path: 'signin',
      element: <SigninSignupPage />,
    },
    {
      path: 'signup',
      element: <SigninSignupPage />,
    },
    {
      path: 'me/*',
      element: <AuthLayout />,
      children: [
        {
          path: 'update-profile',
          element: <UpdateProfileForm />,
        },
        {
          path: 'change-password',
          element: <ChangePasswordForm />,
        },
        {
          path: 'post',
          element: <MyPostPage />,
        },
        {
          path: 'saved',
          element: <MySavePage />,
        },
        {
          path: 'stories',
          element: <MyStoryPage />,
        },
      ],
    },
  ])

  return router
}

export default memo(MainRouter)
