import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

import BasicContentFrame from '@/components/frame/with-buttons';

import Collection from '@/pages/collection';
import Error from '@/pages/error';
import Finder, { getRoomList } from '@/pages/finder';
import Home from '@/pages/home';
import Landing from '@/pages/landing';
import LandingLayout from '@/pages/landing/layout';
import LogIn from '@/pages/logIn';
import Game from '@/pages/play/game';
import LobbyPage, { getLobbyInfo } from '@/pages/play/lobby';
import Mode from '@/pages/play/mode';
import Ranking from '@/pages/ranking';
import Result, { getGameResult } from '@/pages/result';
import Settings from '@/pages/settings';
import Tutorial from '@/pages/tutorial';

import { checkToken } from '@/services/auth';
import { getRank } from '@/services/rank';

import { ROUTE } from '@/shared/constants';

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
    element: (
      <BasicContentFrame>
        <Outlet />
      </BasicContentFrame>
    ),
    children: [
      {
        element: <Outlet />,
        errorElement: <Navigate to={ROUTE.main} replace />,
        loader: checkToken,
        children: [
          {
            path: ROUTE.tutorial,
            element: <Tutorial />,
          },
          {
            path: ROUTE.home,
            element: <Home />,
          },
          {
            path: ROUTE.play,
            errorElement: <Navigate to={`${ROUTE.error}/401`} replace />,
            children: [
              {
                index: true,
                element: <Mode />,
              },
              {
                path: `${ROUTE.lobby}/:roomId`,
                element: <LobbyPage />,
                loader: ({ params }) => getLobbyInfo(params.roomId),
              },
              {
                path: ROUTE.finder,
                element: <Finder />,
                loader: () => getRoomList(1),
              },
            ],
          },
          {
            path: ROUTE.ranking,
            element: <Ranking />,
            loader: getRank,
          },
          {
            path: ROUTE.result,
            element: <Result />,
            errorElement: <Navigate to={ROUTE.home} />,
            loader: getGameResult,
          },
          {
            path: ROUTE.setting,
            element: <Settings />,
          },
          {
            path: ROUTE.collection,
            element: <Collection />,
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
    ],
  },
  {
    path: ROUTE.game,
    element: <Game />,
  },
]);

export default router;
