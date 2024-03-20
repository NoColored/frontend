import * as styles from '@/components/BasicContentFrame/WithButtons/SettingModal/index.css';
import SettingTextButton from '@/components/button/SettingTextButton';
import LoginUser from '@/components/BasicContentFrame/WithButtons/SettingModal/LoginUser';
import ColoredButton from '@/components/button/ColoredButton';
import { indexProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';

const Settings = ({ onClose }: indexProps) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.title}>설정</div>
      <div className={styles.audioBox}>
        <div className={styles.audioText}>오디오</div>
        <div className={styles.audioContentWrapper}>
          <div className={styles.audioButtonWrapper}>
            <div className={styles.textXMargin}>배경음</div>
            <SettingTextButton
              onClick={() => {}}
              size='small'
              colorStyle='black'
            >
              ON
            </SettingTextButton>
            <div className={styles.textXMargin}>효과음</div>
            <SettingTextButton
              onClick={() => {}}
              size='small'
              colorStyle='black'
            >
              ON
            </SettingTextButton>
          </div>
        </div>
      </div>
      <LoginUser />
      <ColoredButton text='닫기' color='green' size='small' onClick={onClose} />
    </div>
  );
};

export default Settings;
