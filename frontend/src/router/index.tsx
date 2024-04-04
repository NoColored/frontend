import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from './constants';

import Collection from '@/pages/collection';
import Error from '@/pages/error';
import Home from '@/pages/home';
import Landing from '@/pages/landing';
import LandingLayout from '@/pages/landing/layout';
import LogIn from '@/pages/landing/logIn';
import Finder from '@/pages/play/finder';
import Game from '@/pages/play/game';
import Lobby from '@/pages/play/lobby';
import Mode from '@/pages/play/mode';
import Ranking from '@/pages/ranking';
import Result from '@/pages/result';
import Settings from '@/pages/settings';
import Tutorial from '@/pages/tutorial';

import { checkToken, getUser } from '@/services/auth';
import { getRoomList } from '@/services/finder';
import { getLobbyInfo } from '@/services/lobby';
import { getRank } from '@/services/rank';
import { getGameResult } from '@/services/result';

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
    element: <Outlet />,
    errorElement: <Navigate to={ROUTE.main} replace />,
    loader: checkToken,
    children: [
      {
        path: `${ROUTE.tutorial}`,
        element: <Tutorial />,
      },
      {
        path: `${ROUTE.home}`,
        element: <Home />,
        loader: getUser,
      },
      {
        path: `${ROUTE.play}`,
        errorElement: <Navigate to={`${ROUTE.error}/401`} replace />,
        children: [
          {
            index: true,
            element: <Mode />,
            loader: getUser,
          },
          {
            path: `${ROUTE.lobby}/:roomId`,
            element: <Lobby />,
            loader: ({ params }) => getLobbyInfo(params.roomId),
          },
          {
            path: `${ROUTE.finder}`,
            element: <Finder />,
            loader: () => getRoomList(1),
          },
          {
            path: `${ROUTE.game}`,
            element: <Game />,
          },
        ],
      },
      {
        path: `${ROUTE.ranking}`,
        element: <Ranking />,
        loader: getRank,
      },
      {
        path: `${ROUTE.result}`,
        element: <Result />,
        errorElement: <Navigate to={ROUTE.home} />,
        loader: getGameResult,
      },
      {
        path: `${ROUTE.setting}`,
        element: <Settings />,
      },
      {
        path: `${ROUTE.collection}`,
        element: <Collection />,
        loader: getUser,
      },
    ],
  },
  {
    path: `${ROUTE.error}/:code`,
    element: <Error />,
  },
  {
    path: '/*',
    element: <Navigate to={`${ROUTE.error}/404`} replace />,
  },
]);

export default router;
