import { useState } from 'react';

import useEffectSoundStore from "@/states/effect";
import useAudioStore from "@/states/music";

interface AudioSettings {
  backgroundSound: boolean;
  effectSound: boolean;
  saveSettings: (bgSound: boolean, efSound: boolean) => void;
}

export const useAudioSetting = (): AudioSettings => {
  const savedBackgroundSound =
    localStorage.getItem('backgroundSound') === 'true';
  const savedEffectSound = localStorage.getItem('effectSound') === 'true';
  const { setIsPlaying } = useAudioStore();

  const [backgroundSound, setBackgroundSound] = useState(savedBackgroundSound);
  const [effectSound, setEffectSound] = useState(savedEffectSound);

  const saveSettings = (bgSound: boolean, efSound: boolean) => {
    localStorage.setItem('backgroundSound', bgSound.toString());
    localStorage.setItem('effectSound', efSound.toString());
    setBackgroundSound(bgSound);
    setEffectSound(efSound);

    setIsPlaying(bgSound);
    useEffectSoundStore.getState().setEffectSound(efSound);
    setEffectSound(efSound);
  };

  return { backgroundSound, effectSound, saveSettings };
};
