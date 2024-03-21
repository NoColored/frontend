import InputTextBox from '@/components/textbox/InputTextBox';
import ColoredButton from '@/components/button/ColoredButton';

import * as styles from './index.css';
import { settingsProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';

const NicknameChange = ({ onClose }: settingsProps) => {
  return (
    <div className={styles.boxWrapper}>
      <div className={styles.text}>이름을 바꿔도 과거로부터</div>
      <div className={styles.text}>도망칠 수는 없지만 말이죠..</div>
      <InputTextBox
        placeholder='수정할 닉네임을 입력하세요'
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

export default NicknameChange;
