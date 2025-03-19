import HomePage from '@/pages/home-page'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'

const MainRouter = () => {
  const router = useRoutes([
    {
      index: true,
      element: <HomePage />,
    },
  ])

  return router
}

export default memo(MainRouter)
