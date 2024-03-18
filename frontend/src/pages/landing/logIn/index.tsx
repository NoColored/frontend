import { useState } from 'react';

import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/landing/index.css';
import LogInFail from '@/pages/landing/logIn/LogInFail';
// import { requestLogIn } from '@/pages/landing/logIn/requestLogIn';
import SignUp from '@/pages/landing/logIn/SignUp';

const LogIn = () => {
  const [userId, setUserId] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const [isClicked, setIsClicked] = useState(false);

  const { Modal, openModal, closeModal } = useModal();

  const inputIdChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const inputPasswordChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const signUpClickEvent = () => {
    openModal();
    setIsClicked(true);
  };

  const logInClickEvent = () => {
    if (userId && userPassword) {
      // requestLogIn(userId, userPassword);
    } else {
      openModal();
      setIsClicked(false);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      {/* onChange 임시 이벤트 익명 함수로 설정 했습니다. */}
      <InputTextBox
        type='text'
        placeholder='아이디'
        size='large'
        onChange={inputIdChangeEvent}
      />
      <InputTextBox
        type='password'
        placeholder='비밀번호'
        size='large'
        onChange={inputPasswordChangeEvent}
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='SIGN UP'
          color='blue'
          size='large'
          onClick={signUpClickEvent}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={logInClickEvent}
        />
      </div>
      {isClicked ? (
        <Modal>
          <SignUp closeModal={closeModal} />
        </Modal>
      ) : (
        <Modal>
          <LogInFail closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default LogIn;
