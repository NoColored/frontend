import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index.tsx';
import LandingPage from '@/pages/landing/index.tsx';
import LandingLayout from '@/pages/landing/layout.tsx';
import LogIn from '@/pages/landing/login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'login',
        element: <LogIn />,
      },
    ],
  },
  {
    path: '/example',
    element: <Example />,
  },
]);

export default router;
