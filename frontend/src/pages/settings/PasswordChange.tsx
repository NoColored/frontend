import React, { useState } from 'react';

import * as styles from './index.css';
import { settingsProps } from '@/components/BasicContentFrame/WithButtons/InfoButton/types';
import ColoredButton from '@/components/button/ColoredButton';
import InputTextBox from '@/components/textbox/InputTextBox';

import * as constants from '@/pages/landing/logIn/constants';
import { patchPasswordChange } from '@/services/auth';

const PasswordChange = ({ onClose }: settingsProps) => {
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
      setErrorMessage(constants.INVALID_PASSWORD_LENGTH_MESSAGE);
      return;
    }
    try {
      const tf = await patchPasswordChange(password, newPassword);
      if (!tf) {
        setErrorMessage(constants.INVALID_PASSWORD_MESSAGE);
        return;
      }
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.centerBoxWrapper}>
      <div className={styles.text}>혹시 생일로 바꾸시는거 아니죠?</div>
      <InputTextBox
        name='password'
        placeholder='현재 비밀번호 숫자 6자리를 입력하세요'
        size='small'
        type='password'
        value={password}
        onChange={passwordChange}
      />
      <InputTextBox
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
