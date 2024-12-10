import { Suspense, lazy } from 'react';
const ClassManagement = lazy(() => import('@/features/Admin/pages/ClassManagement'));
const SectionManagement = lazy(
	() => import('@/features/Admin/pages/SectionManagement')
);
const TeacherManagement = lazy(
	() => import('@/features/Admin/pages/TeacherManagement')
);
const SubjectManagement = lazy(
	() => import('@/features/Admin/pages/SubjectManagement')
);
const Attendance = lazy(
	() => import('@/features/Admin/pages/Attendance')
);
import { Loader } from '@/components/Loader';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export const AdminRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin/class-management"
              element={<ClassManagement />}
            />
            <Route
              path="/admin/section-management"
              element={<SectionManagement />}
            />
            <Route
              path="/admin/teacher-management/*"
              element={<TeacherManagement />}
            />
            <Route
              path="/admin/subject-management"
              element={<SubjectManagement />}
            />
            <Route path="/admin/attendance" element={<Attendance />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
