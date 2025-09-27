import { useState } from 'react';

import { useBgmStore } from './store/music';

const SETTING_KEY = {
  bgm: 'backgroundSound',
  sfx: 'effectSound',
};

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

  const toggleSound = () => {
    localStorage.setItem(SETTING_KEY.bgm, (!setting).toString());
    localStorage.setItem(SETTING_KEY.sfx, (!setting).toString());
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
