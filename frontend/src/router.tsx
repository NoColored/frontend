import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index.tsx';
import HandleError from '@/pages/handleError';
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
    path: '/error',
    element: <HandleError />,
  },
]);

export default router;
