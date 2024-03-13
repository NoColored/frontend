import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index.tsx';
import Home from '@/pages/home/index.tsx';
import { Test } from '@/pages/Test.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example',
    element: <Example />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

export default router;
