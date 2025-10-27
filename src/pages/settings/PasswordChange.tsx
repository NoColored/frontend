import React, { useState } from 'react';

import { patchPasswordChange } from './api';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';


import { ERROR_MESSAGE } from '@/shared/constants';

interface Props {
  onClose: () => void;
}

const PasswordChange = ({ onClose }: Props) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const newPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const passwordChangeClick = async () => {
    if (password.length !== 6 || newPassword.length !== 6) {
      setErrorMessage(ERROR_MESSAGE.inValidPasswordLength);
      return;
    }
    const validPassword = await patchPasswordChange(password, newPassword);
    if (!validPassword) {
      setErrorMessage(ERROR_MESSAGE.inValidPassword);
      return;
    }
    onClose();
  };

  return (
    <div className={styles.centerBoxWrapper}>
      <div className={styles.text}>혹시 생일로 바꾸시는거 아니죠?</div>
      <Input
        name='password'
        placeholder='현재 비밀번호 숫자 6자리를 입력하세요'
        size='small'
        type='password'
        value={password}
        onChange={passwordChange}
      />
      <Input
        name='newPassword'
        placeholder='수정할 비밀번호 숫자 6자리를 입력하세요'
        size='small'
        type='password'
        value={newPassword}
        onChange={newPasswordChange}
      />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
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
          onClick={passwordChangeClick}
        />
      </div>
    </div>
  );
};

export default PasswordChange;
