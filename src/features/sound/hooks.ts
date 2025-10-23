import { useSetAtom, useStore } from 'jotai';
import { useState } from 'react';

import { SETTING_KEY } from './constants';
import { sfxAudioAtom, sfxMutedAtom, updateSfxMutedAtom } from './store/effect';
import { useBgmStore } from './store/music';

export const useSoundSetting = () => {
  const isBgmMuted = localStorage.getItem(SETTING_KEY.bgm) === 'false';
  const isSfxMuted = localStorage.getItem(SETTING_KEY.sfx) === 'false';

  const playBgm = () => {
    if (isBgmMuted) {
      return;
    }

    const { isPlaying, playBackgroundSound } = useBgmStore.getState();
    if (!isPlaying) {
      playBackgroundSound();
    }
  };

  return { isBgmMuted, isSfxMuted, playBgm };
};

export const useSoundToggle = () => {
  const { isBgmMuted } = useSoundSetting();
  const [setting, setSetting] = useState(!isBgmMuted);
  const isBgmPlaying = useBgmStore((state) => state.isPlaying);
  const bgm = useBgmStore((state) => state.audio);
  const setSfxMuted = useSetAtom(updateSfxMutedAtom);

  const toggleSound = () => {
    localStorage.setItem(SETTING_KEY.bgm, (!setting).toString());
    setSfxMuted(setting);
    setSetting((isSettingOn) => {
      if (isSettingOn) {
        // turn off sound
        bgm.volume = 0;
        return false;
      }

      // turn on sound
      if (isBgmPlaying) {
        bgm.volume = 1;
      } else {
        useBgmStore.getState().playBackgroundSound();
      }
      return true;
    });
  };

  return { backgroundSound: setting, toggleSound };
};

export const useEffectSound = () => {
  const store = useStore();

  const playEffectSound = () => {
    const isMuted = store.get(sfxMutedAtom);
    if (!isMuted) {
      const audio = store.get(sfxAudioAtom);
      audio.play().catch((error) => console.error('SFX 오류', error));
    }
  };

  return { playEffectSound };
};
