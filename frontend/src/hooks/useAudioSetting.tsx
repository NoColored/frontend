import { useEffect, useState } from 'react';

const UseAudioSetting = () => {
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

  const saveSettings = (bgSound, efSound) => {
    localStorage.setItem('backgroundSound', bgSound.toString());
    localStorage.setItem('effectSound', efSound.toString());
    setBackgroundSound(bgSound);
    setEffectSound(efSound);
  };

  return { backgroundSound, effectSound, saveSettings };
};

export default UseAudioSetting;
