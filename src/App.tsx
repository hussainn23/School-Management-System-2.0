import './App.css'
import {HomePageRoute} from "../routes/homepage.route"
import {AdminRoutes} from "../routes/admin.route"

function App() {

  return (
        <>
            <HomePageRoute />
            <AdminRoutes />
        </>
  )
}

export default App
