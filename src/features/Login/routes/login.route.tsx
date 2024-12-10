import {Suspense,lazy} from "react"
const Login = lazy(() => import('@/features/Login/pages/Login'));
import {Loader} from "@/components/Loader"
import {Routes,Route} from "react-router-dom"


export const LoginRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Suspense>
    );
}
