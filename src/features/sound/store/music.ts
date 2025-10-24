import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { SETTING_KEY } from '../constants';

const bgmAudioAtom = atom(new Audio('/music/8-bit-game.mp3'));

const bgmPlayingAtom = atom(false);

export const bgmSettingMutedAtom = atomWithStorage(SETTING_KEY.bgm, false);

export const playBgmAudioAtom = atom(null, (get, set) => {
  const isSettingMuted = get(bgmSettingMutedAtom);
  const isPlaying = get(bgmPlayingAtom);
  if (isSettingMuted || isPlaying) {
    return;
  }

  const audio = get(bgmAudioAtom);
  audio.loop = true;
  audio.play().catch((error) => console.error('BGM 오류', error));
  set(bgmPlayingAtom, true);
});

export const updateBgmVolumeAtom = atom(null, (get, _, volume: number) => {
  const audio = get(bgmAudioAtom);
  audio.volume = volume;
});
