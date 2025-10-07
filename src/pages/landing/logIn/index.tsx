import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { LogInInfo } from '@/types/auth';

import ColoredButton from '@/components/button/ColoredButton/index';
import Input from '@/components/input';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/landing/index.css';
import LogInFail from '@/pages/landing/logIn/LogInFail';

import { postMemberLogin } from '@/services/auth';
import { setFullScreen } from '@/services/landing';

import SignUp from '@/features/sign-up';
import { ROUTE } from '@/router/constants';

const LogIn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [logInInfo, setLogInInfo] = useState<LogInInfo>({
    id: '',
    password: '',
  });
  const navigate = useNavigate();

  const { Modal, openModal, closeModal } = useModal();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogInInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const handleLogInClick = async () => {
    return postMemberLogin(logInInfo).then((isLoginSuccess) => {
      if (!isLoginSuccess) {
        setIsClicked(false);
        openModal();
        return;
      }
      navigate(ROUTE.home);
      setFullScreen();
    });
  };

  const handleSignUpClick = () => {
    setIsClicked(true);
    openModal();
  };

  return (
    <div className={styles.contentWrapper}>
      {/* onChange 임시 이벤트 익명 함수로 설정 했습니다. */}
      <Input
        name='id'
        type='text'
        placeholder='아이디'
        size='large'
        value={logInInfo.id}
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
        size='large'
        value={logInInfo.password}
        onChange={handleChange}
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
