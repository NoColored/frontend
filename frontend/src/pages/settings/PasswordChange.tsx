import * as styles from './index.css';

import { settingsProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';
import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

const PasswordChange = ({ onClose }: settingsProps) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.text}>혹시 생일로 바꾸시는거 아니죠?</div>
      <InputTextBox
        placeholder='현재 비밀번호 6자리를 입력하세요'
        size='small'
        type='text'
        onChange={() => {}}
      />
      <InputTextBox
        placeholder='수정할 비밀번호 6자리를 입력하세요'
        size='small'
        type='text'
        onChange={() => {}}
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          size='small'
          text='취소'
          color='navy'
          onClick={onClose}
        />
        <ColoredButton
          size='small'
          text='확인'
          color='green'
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default PasswordChange;
