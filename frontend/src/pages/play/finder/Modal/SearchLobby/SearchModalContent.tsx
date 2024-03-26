import * as styles from '../index.css';

import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

interface Props {
  buttonLeft: () => void;
  buttonRight: () => void;
}

// onChange에서 text값 보내고 체크하는 api 필요

const SearchModalContent = ({ buttonLeft, buttonRight }: Props) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.contentBox}>
        <span>방장한테 허락은 맡으셨죠?</span>
        <InputTextBox
          placeholder='대기실 코드 4자리를 입력하세요'
          size='small'
          type='text'
          onChange={() => {}}
        />
        <InputTextBox
          placeholder='대기실 코드 4자리를 입력하세요'
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

export default SearchModalContent;
