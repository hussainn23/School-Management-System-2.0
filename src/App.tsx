import './App.css'
import {HomePageRoute} from "@/features/Dashboard/routes/homepage.route"
import {AdminRoutes} from "@/features/Admin/routes/admin.route"
import {LoginRoutes} from "@/features/Login/routes/login.route"
import {AdmissionRoutes} from "@/features/Admission/routes/admission.route"
import {HostelRoutes} from "@/features/Hostel/routes/hostel.route"
import {TransportRoutes} from "@/features/Transport/routes/transport.route"
import { Toaster } from './components/ui/sonner'


function App() {

  return (
        <>
            <Toaster />
            <HomePageRoute />
            <AdminRoutes />
            <LoginRoutes />
            <AdmissionRoutes />
            <HostelRoutes />
            <TransportRoutes />
        </>
  )
}

export default App
