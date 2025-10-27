import { useQueryClient } from '@tanstack/react-query';
import { type AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { loginAsGuest, loginAsMember } from './api';

import { userQueryKey } from '@/models/user';
import { ROUTE } from '@/shared/constants';
import { setFullScreen } from '@/shared/utils';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    window.localStorage.removeItem('token');
    queryClient.removeQueries({ queryKey: userQueryKey });
    navigate('/');
  };

  return { logout };
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const memberLogin = async (account: Account) => {
    queryClient.removeQueries({ queryKey: userQueryKey });

    return loginAsMember(account)
      .then((isSuccess) => {
        if (isSuccess) {
          navigate(ROUTE.home, { replace: true });
          setFullScreen();
        }
        return isSuccess;
      })
      .catch(({ response }: AxiosError) => {
        console.debug('login error:', response);
        if (!response || response.status >= 500) {
          navigate(`${ROUTE.error}/500`);
        }
        return false;
      });
  };

  const guestLogin = async () => {
    queryClient.removeQueries({ queryKey: userQueryKey });

    const isSuccess = await loginAsGuest();
    if (!isSuccess) {
      return navigate(`${ROUTE.error}/500`);
    }
    setFullScreen();
    return navigate(ROUTE.tutorial, { replace: true });
  };

  return { memberLogin, guestLogin };
};
