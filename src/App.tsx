import './App.css'
import {HomePageRoute} from "../routes/homepage.route"
import {AdminRoutes} from "../routes/admin.route"
import {LoginRoutes} from "../routes/login.route"
import { Toaster } from './components/ui/sonner'


function App() {

  return (
        <>
            <Toaster />
            <HomePageRoute />
            <AdminRoutes />
            <LoginRoutes />
        </>
  )
}

export default App
