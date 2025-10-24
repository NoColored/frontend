import { useAtom, useSetAtom, useStore } from 'jotai';

import { MUTED } from './constants';
import { sfxAudioAtom, sfxSettingMutedAtom } from './store/effect';
import {
  bgmSettingMutedAtom,
  playBgmAudioAtom,
  updateBgmVolumeAtom,
} from './store/music';

export const useBackgroundSound = () => {
  const playBackgroundSound = useSetAtom(playBgmAudioAtom);

  return { playBackgroundSound };
};

export const useSoundToggle = () => {
  const [isBgmSettingMuted, setBgmSettingMuted] = useAtom(bgmSettingMutedAtom);
  const setSfxSettingMuted = useSetAtom(sfxSettingMutedAtom);
  const setVolume = useSetAtom(updateBgmVolumeAtom);

  const toggleSound = () => {
    const nextSetting = !isBgmSettingMuted;
    setBgmSettingMuted(nextSetting);
    setSfxSettingMuted(nextSetting);
    setVolume(nextSetting === MUTED ? 0 : 1);
  };

  return { backgroundSound: !isBgmSettingMuted, toggleSound };
};

export const useEffectSound = () => {
  const store = useStore();

  const playEffectSound = () => {
    const isMuted = store.get(sfxSettingMutedAtom);
    if (!isMuted) {
      const audio = store.get(sfxAudioAtom);
      audio.play().catch((error) => console.error('SFX 오류', error));
    }
  };

  return { playEffectSound };
};
