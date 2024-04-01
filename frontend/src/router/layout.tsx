import { Navigate, Outlet, useLoaderData } from 'react-router-dom';

import { ROUTE } from '@/router/constants';

const TokenLayout = () => {
  const isTokenValid = useLoaderData() as boolean;

  if (isTokenValid) {
    return <Outlet />;
  }

  localStorage.removeItem('token');
  return <Navigate to={ROUTE.main} replace />;
};

export default TokenLayout;
