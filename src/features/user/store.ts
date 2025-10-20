import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { USER_STATUS } from './constants';

interface UserState {
  loginStatus: number;
  setLogin: (isGuest: boolean) => void;
  setLogout: () => void;
  userCode: string;
  setUserCode: (userCode: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      loginStatus: USER_STATUS.notLoggedIn,
      setLogin: (isGuest) =>
        set(() => {
          if (isGuest) {
            return { loginStatus: USER_STATUS.guest };
          }
          return { loginStatus: USER_STATUS.member };
        }),
      setLogout: () => set({ loginStatus: USER_STATUS.notLoggedIn }),
      userCode: '',
      setUserCode: (userCode) => set({ userCode }),
    }),
    {
      name: 'user-state',
    },
  ),
);
