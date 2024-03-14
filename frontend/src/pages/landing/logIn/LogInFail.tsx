import * as styles from '../index.css.ts';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';

interface Props {
  closeModal: () => void;
}

const LogInFail = ({ closeModal }: Props) => {
  return (
    <>
      <div className={styles.logInFailMessageWrapper}>
        <p className={styles.logInFailMessage}>컬러랜드 입국정보를</p>
        <br />
        <p className={styles.logInFailMessage}>다시 한 번 확인해주세요.</p>
      </div>
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='확인'
          color='green'
          size='small'
          onClick={closeModal}
        />
      </div>
    </>
  );
};

export default LogInFail;
