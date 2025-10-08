import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';

import * as constants from '@/pages/landing/logIn/constants';

import { patchNicknameChange } from '@/services/auth';

import { ROUTE } from '@/constants/routes';

interface Props {
  onClose: () => void;
}

const NicknameChange = ({ onClose }: Props) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const typeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const nicknameChange = async () => {
    if (nickname.length < 2 || nickname.length > 9) {
      setErrorMessage(constants.ERROR_MESSAGE.inValidNickname);
      return;
    }
    const confirmNickname = await patchNicknameChange(nickname);
    if (confirmNickname) {
      onClose();
      navigate(ROUTE.home);
    }
  };

  return (
    <div className={styles.centerBoxWrapper}>
      <div className={styles.text}>이름을 바꿔도 과거로부터</div>
      <div className={styles.text}>도망칠 수는 없지만 말이죠..</div>
      <Input
        name='nickname'
        placeholder='수정할 닉네임을 입력하세요 (2~9자리)'
        size='small'
        type='text'
        value={nickname}
        onChange={typeNickname}
      />
      <div style={{ color: 'red' }}>{errorMessage}</div>
      <div className={styles.buttonWrapper}>
        <ColoredButton
          size='small'
          text='취소'
          color='navy'
          onClick={onClose}
        />
        <ColoredButton
          size='small'
          text='확인'
          color='green'
          onClick={nicknameChange}
        />
      </div>
    </div>
  );
};

export default NicknameChange;
