import { useQuery } from '@tanstack/react-query';

import { USER_STATUS } from './constants';
import { useUserStore } from './store';

import { client, queryClient } from '@/features/api';

export const useUserStatus = () => {
  const status = useUserStore((state) => state.loginStatus);

  return {
    isGuest: status === USER_STATUS.guest,
    isMember: status === USER_STATUS.member,
  };
};

const getUser = async () => {
  return client.get<User>(`/user`).then((response) => {
    const { data } = response;
    console.debug('user:', data);
    return data;
  });
};

const queryKey = ['user'];

export const useUserInfo = () => {
  const { data } = useQuery({
    queryKey,
    queryFn: getUser,
    refetchOnMount: false,
  });

  const refetchUser = () =>
    queryClient.invalidateQueries({
      queryKey,
    });

  return { user: data, refetchUser };
};
