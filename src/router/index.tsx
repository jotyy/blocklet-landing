import Footer from '@/components/footer';
import Header from '@/components/header';
import Loading from '@/components/loading';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import ProfilePage from '@/pages/profile';
import RegisterPage from '@/pages/register';
import SettingsPage from '@/pages/settings';
import { Suspense } from 'react';
import { Outlet, Route, Routes, useRoutes } from 'react-router-dom';

function Layout() {
  return (
    <div className="relative min-h-screen overflow-y-scroll overflow-x-hidden">
      <Header />
      <div className="mt-[80px]">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

const commonRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

const publicRoutes = [
  {
    path: '/auth/*',
    element: (
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    ),
  },
];

const protectedRoutes = [
  {
    path: '/app/*',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ProfilePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
];

export function PublicRoutes() {
  return useRoutes([...publicRoutes, ...commonRoutes]);
}

export function ProtectedRoutes() {
  return useRoutes([...protectedRoutes, ...commonRoutes]);
}
