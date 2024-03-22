import { createBrowserRouter } from 'react-router-dom';

import Error from '@/pages/error';
import Example from '@/pages/example/index';
import Home from '@/pages/home';
import Landing from '@/pages/landing/index';
import LandingLayout from '@/pages/landing/layout';
import LogIn from '@/pages/landing/logIn/index';
import Loading from '@/pages/loading/index';
import Finder from '@/pages/play/finder';
import Game from '@/pages/play/game';
import Lobby from '@/pages/play/lobby/index';
import Mode from '@/pages/play/mode';
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
    path: 'play',
    children: [
      {
        index: true,
        element: <Mode />,
      },
      {
        path: 'lobby',
        element: <Lobby />,
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
    element: <Error />,
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
