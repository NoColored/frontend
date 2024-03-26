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
import Collection from '@/pages/collection';
import Label from '@/pages/collection/Label';
import Achievement from '@/pages/collection/Achievement';

const router = createBrowserRouter([
  {
    path: `${ROUTE.main}`,
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: `${ROUTE.login}`,
        element: <LogIn />,
      },
    ],
  },
  {
    path: `${ROUTE.loading}`,
    element: <Loading />,
  },
  {
    path: `${ROUTE.play}`,
    children: [
      {
        index: true,
        element: <Mode />,
      },
      {
        path: `${ROUTE.lobby}`,
        element: <Lobby />,
      },
      {
        path: `${ROUTE.finder}`,
        element: <Finder />,
      },
      {
        path: `${ROUTE.game}`,
        element: <Game />,
      },
    ],
  },
  {
    path: `${ROUTE.example}`,
    element: <Example />,
  },
  {
    path: '/*',
    element: <Navigate to={`${ROUTE.error}/404`} replace />,
  },
  {
    path: `${ROUTE.ranking}`,
    element: <Ranking />,
  },
  {
    path: `${ROUTE.home}`,
    element: <Home />,
    loader: getUser,
  },
  {
    path: `${ROUTE.result}`,
    element: <Result />,
  },
  {
    path: `${ROUTE.setting}`,
    element: <Settings />,
  },
  {
    path: `${ROUTE.collection}`,
    children: [
      {
        index: true,
        element: <Collection />,
      },
      {
        path: `${ROUTE.label}`,
        element: <Label />,
      },
      {
        path: `${ROUTE.achievement}`,
        element: <Achievement />,
      },
    ],
  },
  {
    path: `${ROUTE.error}/:code`,
    element: <Error />,
  },
]);

export default router;
