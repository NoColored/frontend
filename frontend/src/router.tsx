import { createBrowserRouter } from 'react-router-dom';

import Example from '@/pages/example/index.tsx';
import Home from '@/pages/home/index.tsx';
import Index from '@/pages/mypage';

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
    path: '/collection',
    element: <Index />,
  },
]);

export default router;
