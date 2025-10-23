import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { getUser } from './api';

import { queryClient } from '@/features/api';

const queryKey = ['user'];

const refetchUser = () =>
  queryClient.invalidateQueries({
    queryKey,
  });

export const useUserInfo = (
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>,
) => {
  const { data } = useQuery({
    queryKey,
    queryFn: getUser,
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
