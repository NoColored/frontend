import * as styles from '@/components/BasicContentFrame/WithButtons/SettingModal/index.css';
import SettingTextButton from '@/components/button/SettingTextButton';
import ColoredButton from '@/components/button/ColoredButton';
import { indexProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';

import useAudioSetting from '@/hooks/useAudioSetting';
import LoginUser from '@/components/BasicContentFrame/WithButtons/SettingModal/LoginUser';

const Settings = ({ onClose }: indexProps) => {
  const { backgroundSound, effectSound, saveSettings } = useAudioSetting();
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.title}>설정</div>
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
      <LoginUser />
      <ColoredButton text='닫기' color='green' size='small' onClick={onClose} />
    </div>
  );
};

export default Settings;
