import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  isGuest: boolean;
  setIsGuest: (isGuest: boolean) => void;
  userCode: string;
  setUserCode: (userCode: string) => void;
}

export const useUserStateStore = create<UserState>()(
  persist(
    (set) => ({
      isGuest: false,
      setIsGuest: (isGuest) => set({ isGuest }),
      userCode: '',
      setUserCode: (userCode) => set({ userCode }),
    }),
    {
      name: 'user-state',
    },
  ),
);
