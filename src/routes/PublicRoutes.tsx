import { lazy } from 'react';

const LandingPage = lazy(() => import('@/pages/Landing/Landing'));

const AboutPage = lazy(() => import('@/pages/About/About'));

export const publicRoutes = [
  { path: '/', element: LandingPage },
  { path: '/about', element: AboutPage },
];
