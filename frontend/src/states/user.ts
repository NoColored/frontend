import { create } from 'zustand';
import { User } from '@/types/auth';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStateStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user });
  },
}));
