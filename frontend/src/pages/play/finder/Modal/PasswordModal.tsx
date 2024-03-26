import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as styles from '@/pages/play/finder/Modal/index.css';

interface Props {
  buttonLeft: () => void;
  buttonRight: () => void;
}

const PasswordModal = ({ buttonLeft, buttonRight }: Props) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.contentBox}>
        <span>이 방의 Colored들은 </span>
        <span>아무하고나 쉽게 싸우지 않습니다 </span>
        <InputTextBox
          placeholder='비밀번호 4자리를 입력하세요'
          size='small'
          type='text'
          onChange={() => {}}
        />
        <div className={styles.modalTwoButtonWrapper}>
          <ColoredButton
            size='small'
            text='취소'
            color='navy'
            onClick={buttonLeft}
          />
          <ColoredButton
            size='small'
            text='확인'
            color='green'
            onClick={buttonRight}
          />
        </div>
      </div>
    </div>
  );
};
export default PasswordModal;
