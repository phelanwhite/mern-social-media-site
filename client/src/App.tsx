import { Toaster } from 'react-hot-toast'
import axiosInstance from './configs/axios.config'
import { useAuthStore } from './features/authentication/stores/auth.store'
import MainRouter from './routers/index'

const App = () => {
  const { user } = useAuthStore()
  axiosInstance.defaults.params = {
    _tracking_id: user?._id,
  }
  return (
    <div>
      <MainRouter />
      <Toaster />
    </div>
  )
}

export default App
