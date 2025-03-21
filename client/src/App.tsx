import { Toaster } from 'react-hot-toast'
import axiosInstance from './configs/axios.config'
import { useAuthStore } from './features/authentication/stores/auth.store'
import MainRouter from './routers/index'
import HeaderComponent from './components/layout/HeaderComponent'
import PostCreateUpdateForm from './features/post/components/PostCreateUpdateForm'
import { useEffect } from 'react'
import StoryCreateUpateForm from './features/story/components/StoryCreateUpateForm'

const App = () => {
  const { user, signinWithPasspostSuccess } = useAuthStore()
  axiosInstance.defaults.params = {
    _tracking_id: user?._id,
  }
  useEffect(() => {
    ;(async () => {
      await signinWithPasspostSuccess()
    })()
  }, [])
  return (
    <div>
      <HeaderComponent />
      <MainRouter />
      <Toaster />
      <PostCreateUpdateForm />
      <StoryCreateUpateForm />
    </div>
  )
}

export default App
