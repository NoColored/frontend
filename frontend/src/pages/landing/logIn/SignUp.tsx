import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import { buttonWrapper } from '@/pages/landing/index.css';
import React, { useState } from 'react';
import { SignUpInfo } from '@/types/auth';
import { checkSignUpInfo, useSignUp } from '@/utils/useSignUp';

interface Props {
  closeModal: () => void;
}

const SignUp = ({ closeModal }: Props) => {
  const { signUp } = useSignUp();
  const welcome = '환영합니다. 어쩌면 진짜 Origin';
  const [errorMessage, setErrorMessage] = useState(welcome);
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
    const errorInfo = checkSignUpInfo(signUpInfo);
    if (errorInfo.length >= 1) {
      setErrorMessage(errorInfo);
    } else {
      const success = await signUp(signUpInfo);
      if (success) closeModal();
      else setErrorMessage('중복된 ID!! 진짜 당신은 누구죠?');
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
        placeholder='비밀번호 (최소 6 ~ 20자)'
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
        placeholder='닉네임 (최소 6 ~ 20자)'
        size='medium'
        value={signUpInfo.nickname}
        onChange={handleChange}
      />
      <div
        style={{
          color: errorMessage === welcome ? 'blue' : 'red',
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
