import * as styles from '@/components/BasicContentFrame/WithButtons/SettingModal/index.css';
import InputTextBox from '@/components/textbox/InputTextBox';
import ColoredButton from '@/components/button/ColoredButton';
import { indexProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';

const SignOut = ({ onClose }: indexProps) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.text}>버튼을 잘못 누르셨네요!</div>
      <div className={styles.text}>다시 뒤로 갑시다!</div>
      <InputTextBox
        placeholder='탈퇴를 위해 비밀번호를 입력하세요'
        size='small'
        type='password'
        onChange={() => {}}
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          size='small'
          text='확인'
          color='navy'
          onClick={() => {}}
        />
        <ColoredButton
          size='small'
          text='취소'
          color='gray300'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default SignOut;
