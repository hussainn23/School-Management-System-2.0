import  { Suspense, lazy } from "react"
const ClassManagement = lazy(() => import('../pages/ClassManagement'));
const SectionManagement = lazy(() => import('../pages/SectionManagement'))
const TeacherManagement = lazy(() => import('../pages/TeacherManagement'))
const SubjectManagement = lazy(() => import('../pages/SubjectManagement'));
const Attendance = lazy(() => import('../pages/Attendance'));
import { Loader } from "../src/components/common/Loader"
import { Routes, Route } from "react-router-dom"


export const AdminRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/class-management" element={<ClassManagement />} />
                </Routes>
            </Suspense>

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/section-management" element={<SectionManagement />} />
                </Routes>
            </Suspense>

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/teacher-management/*" element={<TeacherManagement />} />
                </Routes>
            </Suspense>

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/subject-management" element={<SubjectManagement />} />
                </Routes>
            </Suspense>
            
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/admin/attendance" element={<Attendance />} />
                </Routes>
            </Suspense>
        </>
    );
}

