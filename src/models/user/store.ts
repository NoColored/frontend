import { atom } from 'jotai';

type UserCode = User['userCode'];

export const userStaleAtom = atom(false);

export const userCodeAtom = atom<UserCode>('');

export const updateUserCodeAtom = atom(null, (_, set, code: UserCode) => {
  set(userCodeAtom, code);
  set(userStaleAtom, false);
});
