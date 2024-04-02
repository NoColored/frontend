import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ROUTE } from './constants';

import Collection from '@/pages/collection';
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
import { getRoomList } from '@/services/finder';
import { getLobbyInfo } from '@/services/lobby';
import { getRank } from '@/services/rank';
import { getGameResult } from '@/services/result';

import TokenLayout from '@/router/layout';

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
    element: <TokenLayout />,
    loader: checkToken,
    children: [
      {
        path: `${ROUTE.loading}`,
        element: <Loading />,
      },
      {
        path: `${ROUTE.home}`,
        element: <Home />,
        loader: getUser,
      },
      {
        path: `${ROUTE.play}`,
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
      {
        path: `${ROUTE.error}/:code`,
        element: <Error />,
      },
    ],
  },
]);

export default router;
