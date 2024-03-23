import { useState } from 'react';

import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';
import Modal from '@/components/Modal';

import Logout from '@/pages/settings/Logout';
import NicknameChange from '@/pages/settings/NicknameChange';
import PasswordChange from '@/pages/settings/PasswordChange';
import SignOut from '@/pages/settings/SignOut';
import type { settingType } from '@/pages/settings/types';

const LoginUser = () => {
  const [view, setView] = useState<settingType>(null);

  const handleOpenModal = (type: settingType) => {
    setView(type);
  };

  const handleCloseModal = () => {
    setView(null);
  };

  return (
    <div className={styles.underButtonWrapper}>
      <div>
        <SettingTextButton
          onClick={() => handleOpenModal('nickname')}
          size='large'
          colorStyle='black'
        >
          닉네임 변경
        </SettingTextButton>
        <SettingTextButton
          onClick={() => handleOpenModal('logout')}
          size='large'
          colorStyle='red'
        >
          로그아웃
        </SettingTextButton>
      </div>
      <div>
        <SettingTextButton
          onClick={() => handleOpenModal('pwdchange')}
          size='large'
          colorStyle='black'
        >
          비밀번호 변경
        </SettingTextButton>
        <SettingTextButton
          onClick={() => handleOpenModal('signout')}
          size='large'
          colorStyle='gray'
        >
          회원 탈퇴
        </SettingTextButton>
      </div>
      {view && (
        <Modal isOpen onClose={handleCloseModal}>
          {view === 'nickname' && <NicknameChange onClose={handleCloseModal} />}
          {view === 'logout' && <Logout onClose={handleCloseModal} />}
          {view === 'pwdchange' && (
            <PasswordChange onClose={handleCloseModal} />
          )}
          {view === 'signout' && <SignOut onClose={handleCloseModal} />}
        </Modal>
      )}
    </div>
  );
};

export default LoginUser;
