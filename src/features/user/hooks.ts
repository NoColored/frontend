import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { getUser, loginAsGuest, loginAsMember } from './api';
import { userCode } from './store';

import { ROUTE } from '@/constants/routes';
import { queryClient } from '@/features/api';

const queryKey = ['user'];

const refetchUser = () =>
  queryClient.invalidateQueries({
    queryKey,
  });

export const useUserInfo = (
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>,
) => {
  const setUserCode = useSetAtom(userCode);
  const { data } = useQuery({
    queryKey,
    queryFn: async () => {
      const user = await getUser();
      setUserCode(user.userCode);
      return user;
    },
    throwOnError: true,
    refetchOnMount: false,
    ...options,
  });

  return {
    user: data,
    refetchUser,
  };
};

export const useUserStatus = () => {
  const { user } = useUserInfo();

  return {
    isGuest: user && user.guest,
    isMember: user && !user.guest,
  };
};

export const useUserCode = () => useAtomValue(userCode);

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('token');
    queryClient.removeQueries({ queryKey });
    navigate('/');
  };

  return { logout };
};

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (account: Account) => {
    queryClient.removeQueries({ queryKey });

    return loginAsMember(account)
      .then((isSuccess) => {
        if (isSuccess) {
          navigate(ROUTE.home, { replace: true });
          // setFullScreen();
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
    queryClient.removeQueries({ queryKey });

    const isSuccess = await loginAsGuest();
    if (!isSuccess) {
      return navigate(`${ROUTE.error}/500`);
    }
    // setFullScreen();
    return navigate(ROUTE.tutorial);
  };

  return { guestLogin: login };
};
