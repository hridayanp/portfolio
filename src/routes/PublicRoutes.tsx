import { lazy } from 'react';

const LandingPage = lazy(() => import('@/pages/Landing/Landing'));

const AboutPage = lazy(() => import('@/pages/About/About'));

const ProjectsPage = lazy(() => import('@/pages/Projects/Projects'));

export const publicRoutes = [
  { path: '/', element: LandingPage },
  { path: '/about', element: AboutPage },
  { path: '/projects', element: ProjectsPage },
];
