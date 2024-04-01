import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const NOT_LOGIN = 0;
export const GUEST = 1;
export const USER = 2;

interface UserState {
  loginStatus: number;
  setLogin: (isGuest: boolean) => void;
  setLogout: () => void;
  userCode: string;
  setUserCode: (userCode: string) => void;
}

export const useUserStateStore = create<UserState>()(
  persist(
    (set) => ({
      loginStatus: NOT_LOGIN,
      setLogin: (isGuest) =>
        set(() => {
          if (isGuest) {
            return { loginStatus: GUEST };
          }
          return { loginStatus: USER };
        }),
      setLogout: () => set({ loginStatus: NOT_LOGIN }),
      userCode: '',
      setUserCode: (userCode) => set({ userCode }),
    }),
    {
      name: 'user-state',
    },
  ),
);
