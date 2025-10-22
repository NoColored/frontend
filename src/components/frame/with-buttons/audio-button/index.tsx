import { Volume2, VolumeX } from 'lucide-react';
import { memo } from 'react';

import { button } from '../button.css';
import * as styles from './index.css';

import { useSoundToggle } from '@/features/sound';

const AudioButton = memo(() => {
  const { backgroundSound, toggleSound } = useSoundToggle();

  return (
    <button type='button' className={button} onClick={toggleSound}>
      {backgroundSound ? (
        <Volume2 className={styles.svg} />
      ) : (
        <VolumeX className={styles.svg} />
      )}
    </button>
  );
});

export default AudioButton;
