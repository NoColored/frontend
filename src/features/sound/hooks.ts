import { useAtom, useSetAtom } from 'jotai';

import { MUTED } from './constants';
import { playSfxAudioAtom, sfxSettingMutedAtom } from './store/effect';
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
  const [_, setSfxSettingMuted] = useAtom(sfxSettingMutedAtom);
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
  const playEffectSound = useSetAtom(playSfxAudioAtom);

  return { playEffectSound };
};
