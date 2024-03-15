import * as styles from '../index.css.ts';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';

import * as constants from '@/pages/landing/logIn/constants.ts';

interface Props {
  closeModal: () => void;
}

const LogInFail = ({ closeModal }: Props) => {
  return (
    <>
      <div className={styles.logInFailMessageWrapper}>
        <pre className={styles.logInFailMessage}>
          {constants.LOGIN_FAIL_MESSAGE}
        </pre>
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
