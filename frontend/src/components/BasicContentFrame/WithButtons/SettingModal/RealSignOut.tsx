import * as styles from '@/components/BasicContentFrame/WithButtons/SettingModal/index.css';
import ColoredButton from '@/components/button/ColoredButton';
import { indexProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';

const RealSignOut = ({ onClose }: indexProps) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.text}>당신의 이야기는</div>
      <div className={styles.text}>아직 끝나지 않았습니다!</div>
      <br />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          size='small'
          text='탈퇴'
          color='navy'
          onClick={() => {}}
        />
        <ColoredButton
          size='small'
          text='뒤로'
          color='green'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default RealSignOut;
