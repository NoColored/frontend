import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '@/router/constants';

const TokenLayout = () => {
  const isLogin = !!localStorage.getItem('token');

  return isLogin ? <Outlet /> : <Navigate to={ROUTE.main} />;
};

export default TokenLayout;
