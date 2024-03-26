import * as styles from '../index.css';

import ColoredButton from '@/components/button/ColoredButton/index';

import * as constants from '@/pages/landing/logIn/constants';

interface Props {
  closeModal: () => void;
}

const LogInFail = ({ closeModal }: Props) => {
  return (
    <>
      <div className={styles.logInFailMessageWrapper}>
        <pre className={styles.logInFailMessage}>
          {constants.ERROR_MESSAGE.loginFail}
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
