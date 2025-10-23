import { atom } from 'jotai';

import { SETTING_KEY } from '../constants';

export const sfxAudioAtom = atom(new Audio('/music/blop.mp3'));

export const sfxMutedAtom = atom(
  localStorage.getItem(SETTING_KEY.sfx) === 'false',
);

export const updateSfxMutedAtom = atom(null, (_, set, setting: boolean) => {
  localStorage.setItem(SETTING_KEY.sfx, setting.toString());
  set(sfxMutedAtom, setting);
});
