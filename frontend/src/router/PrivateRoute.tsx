import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '@/router/constants';

const isLogin = !!localStorage.getItem('token');

const PrivateRoute = () => {
  return isLogin ? <Outlet /> : <Navigate to={ROUTE.main} />;
};

export default PrivateRoute;
