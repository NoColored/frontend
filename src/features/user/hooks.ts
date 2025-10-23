import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { getUser } from './api';
import { userCode } from './store';

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
    notLoggedIn: !user,
    isGuest: user && user.guest,
    isMember: user && !user.guest,
  };
};

export const useUserCode = () => useAtomValue(userCode);
