import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUpInfo } from '@/types/auth';

import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import { buttonWrapper } from '@/pages/landing/index.css';
import * as constants from '@/pages/landing/logIn/constants';

import { getIdCheck, postGuestSignUp, postSignUp } from '@/services/auth';
import { setFullScreen } from '@/services/landing';

import { GUEST, NOT_LOGIN, useUserStateStore } from '@/states/user';

import { checkSignUpInfo } from '@/utils/useSignUp';

import { ROUTE } from '@/router/constants';

interface Props {
  closeModal: () => void;
}

const SignUp = ({ closeModal }: Props) => {
  const { loginStatus } = useUserStateStore.getState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(
    constants.ERROR_MESSAGE.welcome,
  );
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
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
      setErrorMessage(constants.ERROR_MESSAGE.sameId);
      return;
    }
    const errorInfo = checkSignUpInfo(signUpInfo);
    if (errorInfo.length >= 1) {
      setErrorMessage(errorInfo);
      return;
    }

    if (loginStatus === GUEST) {
      await postGuestSignUp(signUpInfo).then((isSuccess) => {
        if (isSuccess) {
          closeModal();
          navigate(ROUTE.home);
        }
      });
      return;
    }

    if (loginStatus === NOT_LOGIN) {
      await postSignUp(signUpInfo).then((isSuccess) => {
        if (isSuccess) {
          closeModal();
          navigate(ROUTE.tutorial);
          setFullScreen();
        }
      });
    }
  };

  return (
    <>
      <InputTextBox
        name='id'
        type='text'
        placeholder='아이디 (최소 6 ~ 20자)'
        size='medium'
        value={signUpInfo.id}
        onChange={handleChange}
      />
      <InputTextBox
        name='password'
        type='password'
        placeholder='비밀번호 (숫자 6자)'
        size='medium'
        value={signUpInfo.password}
        onChange={handleChange}
      />
      <InputTextBox
        name='passwordConfirm'
        type='password'
        placeholder='비밀번호 확인'
        size='medium'
        value={signUpInfo.passwordConfirm}
        onChange={handleChange}
      />
      <InputTextBox
        name='nickname'
        type='text'
        placeholder='닉네임 (최소 2 ~ 9자)'
        size='medium'
        value={signUpInfo.nickname}
        onChange={handleChange}
      />
      <div
        style={{
          color:
            errorMessage === constants.ERROR_MESSAGE.welcome ? 'blue' : 'red',
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
