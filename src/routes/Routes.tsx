import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './PublicRoutes';
import { PublicRoute } from './Routing';

const NotFoundPage = lazy(() => import('@/components/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              path={route?.path}
              element={
                <PublicRoute>
                  <route.element />
                </PublicRoute>
              }
              key={index}
            />
          );
        })}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
