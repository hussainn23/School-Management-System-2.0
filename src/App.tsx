import './App.css'
import {HomePageRoute} from "../routes/homepage.route"
import {AdminRoutes} from "../routes/admin.route"
import {LoginRoutes} from "../routes/login.route"
import { QueryClientProvider,QueryClient } from 'react-query'
import { Toaster } from './components/ui/sonner'

const queryClient = new QueryClient()

function App() {

  return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <HomePageRoute />
            <AdminRoutes />
            <LoginRoutes />
        </QueryClientProvider>
  )
}

export default App
