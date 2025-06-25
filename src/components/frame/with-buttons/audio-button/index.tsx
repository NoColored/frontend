import { Volume2, VolumeX } from 'lucide-react';

import * as styles from './index.css';

import { useAudioSetting } from '@/hooks/useAudioSetting';

const AudioButton = () => {
  const { backgroundSound, saveSettings } = useAudioSetting();

  const handleClick = () => {
    saveSettings(!backgroundSound, !backgroundSound);
  };

  return (
    <button type='button' className={styles.button} onClick={handleClick}>
      {backgroundSound ? (
        <Volume2 className={styles.svg} />
      ) : (
        <VolumeX className={styles.svg} />
      )}
    </button>
  );
};

export default AudioButton;
