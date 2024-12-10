import { Suspense,lazy } from "react";
import { Loader } from "@/components/Loader";
import { Routes,Route } from "react-router-dom";
const Transport = lazy(() => import('@/features/Transport/pages/TransportHomepage'))


export const TransportRoutes = () => {
    return(
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<Transport />} path="/transport-management" />
            </Routes>
        </Suspense>
    )
}