import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getIdCheck, postGuestSignUp, postSignUp } from './api';
import { checkSignUpInfo } from './utils';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';

import { buttonWrapper } from '@/pages/landing/index.css';

import { setFullScreen } from '@/services/landing';

import { ERROR_MESSAGE } from '@/constants';
import { ROUTE } from '@/constants/routes';

interface Props {
  closeModal: () => void;
  isGuest?: boolean;
}

const SignUp = ({ closeModal, isGuest }: Props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(ERROR_MESSAGE.welcome);
  const [signUpInfo, setSignUpInfo] = useState<SignUpForm>({
    id: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo((info) => ({
      ...info,
      [name]: value,
    }));
    setErrorMessage('');
  };

  const clickSignUp = async () => {
    const checkId = await getIdCheck(signUpInfo.id);
    if (checkId) {
      setErrorMessage(ERROR_MESSAGE.sameId);
      return;
    }
    const errorInfo = checkSignUpInfo(signUpInfo);
    if (errorInfo.length >= 1) {
      setErrorMessage(errorInfo);
      return;
    }

    const signUp = isGuest ? postGuestSignUp : postSignUp;
    const isSuccess = await signUp(signUpInfo);
    if (!isSuccess) {
      return;
    }
    closeModal();
    const to = isGuest ? ROUTE.home : ROUTE.tutorial;
    navigate(to, { replace: true });
    if (!isGuest) {
      setFullScreen();
    }
  };

  return (
    <>
      <Input
        name='id'
        type='text'
        placeholder='아이디 (최소 6 ~ 20자)'
        size='medium'
        value={signUpInfo.id}
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        placeholder='비밀번호 (숫자 6자)'
        size='medium'
        value={signUpInfo.password}
        onChange={handleChange}
      />
      <Input
        name='passwordConfirm'
        type='password'
        placeholder='비밀번호 확인'
        size='medium'
        value={signUpInfo.passwordConfirm}
        onChange={handleChange}
      />
      <Input
        name='nickname'
        type='text'
        placeholder='닉네임 (최소 2 ~ 9자)'
        size='medium'
        value={signUpInfo.nickname}
        onChange={handleChange}
      />
      <div
        style={{
          color: errorMessage === ERROR_MESSAGE.welcome ? 'blue' : 'red',
        }}
      >
        {errorMessage}
      </div>
      <div className={buttonWrapper}>
        <ColoredButton
          text='취소'
          color='navy'
          size='small'
          onClick={closeModal}
        />
        <ColoredButton
          text='가입'
          color='blue'
          size='small'
          onClick={clickSignUp}
        />
      </div>
    </>
  );
};

export default SignUp;
