import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '../src/components/common/Loader';
const ClassManagement = lazy(() => import('../pages/ClassManagement'));
const SectionManagement = lazy(() => import('../pages/SectionManagement'));
const TeacherManagement = lazy(() => import('../pages/TeacherManagement'));

export const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/admin/class-management" element={<ClassManagement />} />
        <Route
          path="/admin/section-management"
          element={<SectionManagement />}
        />
        <Route
          path="/admin/teacher-management/*"
          element={<TeacherManagement />}
        />
      </Routes>
    </Suspense>
  );
};
