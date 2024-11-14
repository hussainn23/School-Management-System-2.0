import React,{Suspense,lazy} from "react"
const ClassManagement = lazy(() => import('../pages/ClassManagement'));
import {Loader} from "../src/components/common/Loader"
import {Routes,Route} from "react-router-dom"


export const AdminRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/admin/class-management" element={<ClassManagement />} />
            </Routes>
        </Suspense>
    );
}