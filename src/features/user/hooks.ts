import { USER_STATUS } from './constants';
import { useUserStore } from './store';

export const useUserStatus = () => {
  const status = useUserStore((state) => state.loginStatus);

  return {
    isGuest: status === USER_STATUS.guest,
    isMember: status === USER_STATUS.member,
  };
};
