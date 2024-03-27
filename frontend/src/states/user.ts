import { create } from 'zustand';

interface UserState {
  isGuest: boolean;
  setGuest: () => void;
  setMember: () => void;
}

export const useUserStateStore = create<UserState>((set) => ({
  isGuest: false,
  setGuest: () => {
    set({ isGuest: true });
  },
  setMember: () => {
    set({ isGuest: false });
  },
}));
