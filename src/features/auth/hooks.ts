import { type AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { loginAsGuest, loginAsMember } from './api';

import { ROUTE } from '@/constants/routes';
import { removeUserQuery } from '@/models/user';
import { setFullScreen } from '@/shared/utils';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('token');
    removeUserQuery();
    navigate('/');
  };

  return { logout };
};

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (account: Account) => {
    removeUserQuery();

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

  return { login };
};

export const useGuestLogin = () => {
  const navigate = useNavigate();

  const login = async () => {
    removeUserQuery();

    const isSuccess = await loginAsGuest();
    if (!isSuccess) {
      return navigate(`${ROUTE.error}/500`);
    }
    setFullScreen();
    return navigate(ROUTE.tutorial, { replace: true });
  };

  return { guestLogin: login };
};
