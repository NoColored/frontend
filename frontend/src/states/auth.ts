import { atom } from 'recoil';

import { user } from '@/types/auth';

export const userState = atom<user | null>({
  key: 'userState',
  default: null,
});
