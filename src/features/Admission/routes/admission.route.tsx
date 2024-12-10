import { Suspense, lazy } from 'react';
const Enrollment = lazy(() => import('@/features/Admission/pages/Enrollment'));
const AddEnrollment = lazy(() => import('@/features/Admission/components/enrollmentForm/AddEnrollment'))
const StudentProfile = lazy(
	() => import('@/features/Admission/pages/StudentProfile')
);
const PendingStudents = lazy(
	() => import('@/features/Admission/pages/PendingStudents')
);
const AddPendingEnrollment = lazy(() => import('@/features/Admission/components/pendingStudentForm/AddPendingEnrollment'))
import { Loader } from '@/components/Loader';
import { Routes, Route } from 'react-router-dom';
import {ProtectedRoute} from "@/components/ProtectedRoute"

export const AdmissionRoutes = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route element={<ProtectedRoute />}>
						
                        <Route
							path="/admission/enrollment"
							element={<Enrollment />}
						/>

						<Route
							path="/admission/enrollment/new"
							element={<AddEnrollment />}
						/>

						<Route
							path="/admission/enrollment/:id"
							element={<StudentProfile />}
						/>

						<Route
							path="/admission/pending-students"
							element={<PendingStudents />}
						/>

						<Route
							path="/admission/pending-students/new"
							element={<AddPendingEnrollment />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</>
	);
};
