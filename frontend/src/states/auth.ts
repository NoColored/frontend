import { atom } from 'recoil';

import type { User } from '@/types/auth';

export const userState = atom<User | null>({
  key: 'loginUser',
  default: null,
});
