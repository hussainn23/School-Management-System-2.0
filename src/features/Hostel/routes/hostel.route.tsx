import { Suspense, lazy } from 'react';
const HostelManagement = lazy(() => import('@/features/Hostel/pages/HostelManagement'));
const HostelStudents = lazy(() => import('@/features/Hostel/pages/Students'));
const Rooms = lazy(() => import('@/features/Hostel/pages/Rooms'));
import { Loader } from '@/components/Loader';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export const HostelRoutes = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route element={<ProtectedRoute />}>

						<Route
							path="/hostel-management/pending-students"
							element={<HostelManagement />}
						/>

						<Route
							path="/hostel-management/students"
							element={<HostelStudents />}
						/>

						<Route
							path="/hostel-management/rooms"
							element={<Rooms />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</>
	);
};
