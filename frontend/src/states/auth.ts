import { atom } from 'recoil';

import { User } from '@/types/auth';

export const userState = atom<User | null>({
  key: 'loginUser',
  default: null,
});

export const accessTokenState = atom({
  key: 'accessToken',
  default: '',
});
