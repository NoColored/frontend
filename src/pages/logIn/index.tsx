import React, { useState } from 'react';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';

import useModal from '@/hooks/useModal';

import LogInFail from '@/pages/logIn/LogInFail';

import SignUp from '@/features/sign-up';
import { useLogin } from '@/features/user';

const LogIn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [logInInfo, setLogInInfo] = useState<Account>({
    id: '',
    password: '',
  });
  const { login } = useLogin();

  const { Modal, openModal, closeModal } = useModal();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogInInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const handleLogInClick = async () => {
    const isLoginSuccess = await login(logInInfo);
    if (!isLoginSuccess) {
      setIsClicked(false);
      openModal();
    }
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
