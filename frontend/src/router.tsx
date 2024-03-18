import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index.tsx';
import Home from '@/pages/home/index.tsx';
import Landing from '@/pages/landing/index.tsx';
import LandingLayout from '@/pages/landing/layout.tsx';
import LogIn from '@/pages/landing/logIn/index.tsx';
import Loading from '@/pages/loading/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
    ],
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '/example',
    element: <Example />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default router;
