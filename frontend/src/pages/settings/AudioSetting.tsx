import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';

import { useAudioSetting } from '@/hooks/useAudioSetting';

const AudioSetting = () => {
  const { backgroundSound, effectSound, saveSettings } = useAudioSetting();

  return (
    <fieldset className={styles.fieldSetBorder}>
      <legend className={styles.legendText}>오디오</legend>
      <div className={styles.audioContentWrapper}>
        <div className={styles.audioButtonWrapper}>
          <div className={styles.textXMargin}>배경음</div>
          <SettingTextButton
            onClick={() => saveSettings(!backgroundSound, effectSound)}
            size='small'
            colorStyle='black'
          >
            {backgroundSound ? 'ON' : 'OFF'}
          </SettingTextButton>
          <div className={styles.textXMargin}>효과음</div>
          <SettingTextButton
            onClick={() => saveSettings(backgroundSound, !effectSound)}
            size='small'
            colorStyle='black'
          >
            {effectSound ? 'ON' : 'OFF'}
          </SettingTextButton>
        </div>
      </div>
    </fieldset>
  );
};

export default AudioSetting;
