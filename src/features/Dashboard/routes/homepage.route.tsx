import { Route ,Routes} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('@/features/Dashboard/pages/Dashboard'));
import {Loader} from "@/components/Loader"
import { ProtectedRoute } from '@/components/ProtectedRoute';

export const HomePageRoute: React.FC = () => {
    return (
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Suspense>
    );
};
