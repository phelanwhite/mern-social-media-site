import { Toaster } from 'react-hot-toast'
import axiosInstance from './configs/axios.config'
import { useAuthStore } from './features/authentication/stores/auth.store'
import MainRouter from './routers/index'
import HeaderComponent from './components/layout/HeaderComponent'
import PostCreateUpdateForm from './features/post/components/PostCreateUpdateForm'

const App = () => {
  const { user } = useAuthStore()
  axiosInstance.defaults.params = {
    _tracking_id: user?._id,
  }
  return (
    <div>
      <HeaderComponent />
      <MainRouter />
      <Toaster />
      <PostCreateUpdateForm />
    </div>
  )
}

export default App
