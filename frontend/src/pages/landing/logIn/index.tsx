import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/landing/index.css';
import LogInFail from '@/pages/landing/logIn/LogInFail';
import { requestLogIn } from '@/pages/landing/logIn/requestLogIn';
import SignUp from '@/pages/landing/logIn/SignUp';

const LogIn = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const { Modal, openModal, closeModal } = useModal();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    openModal();
    setIsClicked(true);
  };

  const handleLogInClick = () => {
    const check = requestLogIn(userId, userPassword);

    // userId 와 userPassword null 여부는 백에서도 체크
    if (!userId || !userPassword || !check) {
      openModal();
      setIsClicked(false);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.contentWrapper}>
      {/* onChange 임시 이벤트 익명 함수로 설정 했습니다. */}
      <InputTextBox
        type='text'
        placeholder='아이디'
        size='large'
        value={userId}
        onChange={handleIdChange}
      />
      <InputTextBox
        type='password'
        placeholder='비밀번호'
        size='large'
        value={userPassword}
        onChange={handlePasswordChange}
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='SIGN UP'
          color='blue'
          size='large'
          onClick={handleSignUpClick}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={handleLogInClick}
        />
      </div>
      <Modal>
        {isClicked ? (
          <SignUp closeModal={closeModal} />
        ) : (
          <LogInFail closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default LogIn;
