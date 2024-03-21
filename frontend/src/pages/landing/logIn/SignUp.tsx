import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import { buttonWrapper } from '@/pages/landing/index.css';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/auth';
import { getIdCheck, postGuestSignUp, postSignUp } from '@/services/auth';
import React, { useState } from 'react';
import { SignUpInfo } from '@/types/auth';

interface Props {
  closeModal: () => void;
}

const SignUp = ({ closeModal }: Props) => {
  const user = useRecoilValue(userState);
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    id: '',
    password: '',
    passwordCheck: '',
    nickname: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const clickSignUp = async () => {
    //현재 하드 코딩
    const idCheck = await getIdCheck(signUpInfo.id);
    if (!idCheck) {
      if (user?.guest) {
        console.log(user?.guest);
        await postGuestSignUp(signUpInfo);
      } else {
        await postSignUp(signUpInfo);
      }
    } else {
      alert('아이디 중복'); // 후에 SignUp 모달에 뜨는 것으로 변경
    }
  };

  return (
    <>
      <InputTextBox
        name='id'
        type='text'
        placeholder='아이디'
        size='medium'
        value={signUpInfo.id}
        onChange={handleChange}
      />
      <InputTextBox
        name='password'
        type='password'
        placeholder='비밀번호 (숫자 6자리)'
        size='medium'
        value={signUpInfo.password}
        onChange={handleChange}
      />
      <InputTextBox
        name='passwordCheck'
        type='password'
        placeholder='비밀번호 확인'
        size='medium'
        value={signUpInfo.passwordCheck}
        onChange={handleChange}
      />
      <InputTextBox
        name='nickname'
        type='text'
        placeholder='닉네임'
        size='medium'
        value={signUpInfo.nickname}
        onChange={handleChange}
      />
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
