import { useEffect, useState } from 'react';

interface AudioSettings {
  backgroundSound: boolean;
  effectSound: boolean;
  saveSettings: (bgSound: boolean, efSound: boolean) => void;
}

const UseAudioSetting = (): AudioSettings => {
  const [backgroundSound, setBackgroundSound] = useState(true);
  const [effectSound, setEffectSound] = useState(true);

  useEffect(() => {
    const bgSound = localStorage.getItem('backgroundSound');
    const efSound = localStorage.getItem('effectSound');

    if (bgSound !== null) {
      setBackgroundSound(bgSound === 'true');
    }
    if (efSound !== null) {
      setEffectSound(efSound === 'true');
    }
  }, []);

  const saveSettings = (bgSound: boolean, efSound: boolean) => {
    localStorage.setItem('backgroundSound', bgSound.toString());
    localStorage.setItem('effectSound', efSound.toString());
    setBackgroundSound(bgSound);
    setEffectSound(efSound);
  };

  return { backgroundSound, effectSound, saveSettings };
};

export default UseAudioSetting;
