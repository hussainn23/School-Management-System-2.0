import { Route ,Routes} from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('../pages/Dashboard'));
import {Loader} from "../src/components/common/Loader"
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
