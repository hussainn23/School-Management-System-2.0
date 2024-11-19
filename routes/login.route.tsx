import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const Login = lazy(() => import('../pages/Login'));
import { Loader } from '../src/components/common/Loader';

export const LoginRoute: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
