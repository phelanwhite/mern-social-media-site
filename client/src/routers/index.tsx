import ChangePasswordForm from '@/features/authentication/components/ChangePasswordForm'
import UpdateProfileForm from '@/features/authentication/components/UpdateProfileForm'
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
      children: [
        {
          path: 'update-profile',
          element: <UpdateProfileForm />,
        },
        {
          path: 'change-password',
          element: <ChangePasswordForm />,
        },
      ],
    },
  ])

  return router
}

export default memo(MainRouter)
