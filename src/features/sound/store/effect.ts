import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { SETTING_KEY } from '../constants';

const sfxAudioAtom = atom(new Audio('/music/blop.mp3'));

export const sfxSettingMutedAtom = atomWithStorage(SETTING_KEY.sfx, false);

export const playSfxAudioAtom = atom(null, (get) => {
  const isMuted = get(sfxSettingMutedAtom);
  if (!isMuted) {
    const audio = get(sfxAudioAtom);
    audio.play().catch((error) => console.error('SFX 오류', error));
  }
});
