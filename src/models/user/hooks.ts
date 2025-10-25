import { useQuery } from '@tanstack/react-query';
import { getDefaultStore, useAtomValue, useSetAtom } from 'jotai';

import { getUser } from './api';
import { queryKey } from './constants';
import { updateUserCodeAtom, userCodeAtom, userStaleAtom } from './store';

import { queryClient } from '@/shared/api';

const refetchUser = () =>
  queryClient.invalidateQueries({
    queryKey,
  });

export const useUserInfo = () => {
  const setUserCode = useSetAtom(updateUserCodeAtom);
  const store = getDefaultStore();
  const isStale = store.get(userStaleAtom);

  const { data } = useQuery({
    queryKey,
    queryFn: async () => {
      const user = await getUser();
      setUserCode(user.userCode);
      return user;
    },
    throwOnError: true,
    refetchOnMount: isStale,
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

export const useUserCode = () => useAtomValue(userCodeAtom);

export const useUserStale = () => {
  const setIsStale = useSetAtom(userStaleAtom);

  return {
    setUserStale: () => setIsStale(true),
  };
};
