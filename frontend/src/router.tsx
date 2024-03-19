import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index';
import HandleError from '@/pages/handleError';
import Home from '@/pages/home';
import Landing from '@/pages/landing/index';
import LandingLayout from '@/pages/landing/layout';
import LogIn from '@/pages/landing/logIn/index';
import Loading from '@/pages/loading/index';
import Ranking from '@/pages/ranking';
import Result from '@/pages/result';

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
    path: '/*',
    element: <HandleError />,
  },
  {
    path: '/ranking',
    element: <Ranking />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

export default router;
