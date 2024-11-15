import './App.css'
import {HomePageRoute} from "../routes/homepage.route"
import {AdminRoutes} from "../routes/admin.route"
import {LoginRoutes} from "../routes/login.route"

function App() {

  return (
        <>
            <HomePageRoute />
            <AdminRoutes />
            <LoginRoutes />
        </>
  )
}

export default App
