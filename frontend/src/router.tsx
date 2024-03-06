import { createBrowserRouter } from 'react-router-dom';
import Example from '@/pages/example/index.tsx';
import Home from '@/pages/home/index.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/example',
    element: <Example />
  },

]);

export default router;