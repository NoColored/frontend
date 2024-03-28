import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ROUTE } from './constants';

import Error from '@/pages/error';
import Example from '@/pages/example';
import Home from '@/pages/home';
import Landing from '@/pages/landing';
import LandingLayout from '@/pages/landing/layout';
import LogIn from '@/pages/landing/logIn';
import Loading from '@/pages/loading';
import Finder from '@/pages/play/finder';
import Game from '@/pages/play/game';
import Lobby from '@/pages/play/lobby';
import Mode from '@/pages/play/mode';
import Ranking from '@/pages/ranking';
import Result from '@/pages/result';
import Settings from '@/pages/settings';

import { getUser } from '@/services/auth';
import { getLobbyInfo } from '@/services/lobby';

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
    path: 'play',
    children: [
      {
        index: true,
        element: <Mode />,
        loader: getUser,
      },
      {
        path: 'lobby/:roomId',
        element: <Lobby />,
        loader: ({ params }) => getLobbyInfo(params.roomId),
      },
      {
        path: 'finder',
        element: <Finder />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
  {
    path: '/example',
    element: <Example />,
  },
  {
    path: '/*',
    element: <Navigate to={`${ROUTE.error}/404`} replace />,
  },
  {
    path: '/ranking',
    element: <Ranking />,
  },
  {
    path: '/home',
    element: <Home />,
    loader: getUser,
  },
  {
    path: '/result',
    element: <Result />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: `${ROUTE.error}/:code`,
    element: <Error />,
  },
]);

export default router;
