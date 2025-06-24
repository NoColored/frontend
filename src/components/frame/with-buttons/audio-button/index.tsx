import { Volume2, VolumeX } from 'lucide-react';
import * as styles from './index.css';
import { useState } from 'react';
import { useAudioSetting } from '@/hooks/useAudioSetting';

const AudioButton = () => {
  const [isMute, setIsMute] = useState(false);
  const { backgroundSound, effectSound, saveSettings } = useAudioSetting();

  const handleClick = () => {
    setIsMute(!isMute);
    saveSettings(!backgroundSound, !effectSound);
  };

  return (
    <button type='button' className={styles.button} onClick={handleClick}>
      {!isMute && <Volume2 className={styles.svg} />}
      {isMute && <VolumeX className={styles.svg} />}
    </button>
  );
};

export default AudioButton;
