import React, { useState } from 'react';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import Input from '@/components/input';

import { deleteUserInfo, postConfirmPassword } from '@/services/auth';

import { ERROR_MESSAGE } from '@/constants';

interface Props {
  onClose: () => void;
}

const DeleteAccount = ({ onClose }: Props) => {
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPassword = async () => {
    const isConfirmed = await postConfirmPassword(password);
    if (isConfirmed) {
      setCheck(true);
    }
    if (!isConfirmed) {
      setErrorMessage(ERROR_MESSAGE.inValidSignOut);
    }
  };

  const deleteMyInfo = async () => {
    await deleteUserInfo();
  };

  if (check) {
    return (
      <div className={styles.centerBoxWrapper}>
        <div className={styles.text}>당신의 이야기는</div>
        <div className={styles.text}>아직 끝나지 않았습니다!</div>
        <br />
        <div className={styles.buttonWrapper}>
          <ColoredButton
            size='small'
            text='탈퇴'
            color='navy'
            onClick={deleteMyInfo}
          />
          <ColoredButton
            size='small'
            text='다시'
            color='green'
            onClick={onClose}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.centerBoxWrapper}>
      <div className={styles.text}>버튼을 잘못 누르셨네요!</div>
      <div className={styles.text}>다시 뒤로 갑시다!</div>
      <Input
        name='password'
        placeholder='실패작의 비밀번호 6자리를 입력하세요'
        size='small'
        type='password'
        value={password}
        onChange={passwordChange}
      />
      <div style={{ color: 'red' }}>{errorMessage}</div>
      <div className={styles.buttonWrapper}>
        <ColoredButton
          size='small'
          text='탈퇴'
          color='navy'
          onClick={confirmPassword}
        />
        <ColoredButton
          size='small'
          text='취소'
          color='gray300'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default DeleteAccount;
