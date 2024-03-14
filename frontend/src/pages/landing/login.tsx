import * as styles from './index.css.ts';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';
import InputTextBox from '@/components/InputTextBox/index.tsx';

const LogIn = () => {
  return (
    <div className={styles.contentBox}>
      {/* onChange 임시 이벤트 익명 함수로 설정 했습니다. */}
      <InputTextBox placeholder='아이디' size='large' onChange={() => {}} />
      <InputTextBox placeholder='비밀번호' size='large' onChange={() => {}} />
      <div className={styles.buttonBox}>
        <ColoredButton
          text='SIGN UP'
          color='blue'
          size='large'
          onClick={() => {}}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={() => {}}
        />
      </div>
      <span className={styles.clickText}>click to start!</span>
    </div>
  );
};

export default LogIn;
