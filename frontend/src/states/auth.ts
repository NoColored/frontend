import { atom } from 'recoil';

export const tokenState = atom({
  key: 'token',
  default: '',
});

export const nickNameState = atom({
  key: 'nickname',
  default: '',
});

export const userCodeState = atom({
  key: 'userCode',
  default: '',
});
