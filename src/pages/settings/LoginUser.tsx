import { useState } from 'react';

import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';

import useModal from '@/hooks/useModal';

import Logout from '@/pages/settings/Logout';
import NicknameChange from '@/pages/settings/NicknameChange';
import PasswordChange from '@/pages/settings/PasswordChange';
import SignOut from '@/pages/settings/SignOut';
import type { settingType } from '@/pages/settings/types';

const LoginUser = () => {
  const [view, setView] = useState<settingType>(null);
  const { Modal, openModal, closeModal } = useModal({
    onClose: () => setView(null),
  });

  const handleOpenModal = (type: settingType) => {
    setView(type);
    openModal();
  };

  return (
    <div className={styles.settingButtonWrapper}>
      <SettingTextButton
        onClick={() => handleOpenModal('nickname')}
        size='large'
        colorStyle='black'
      >
        닉네임 변경
      </SettingTextButton>

      <SettingTextButton
        onClick={() => handleOpenModal('pwdchange')}
        size='large'
        colorStyle='black'
      >
        비밀번호 변경
      </SettingTextButton>

      <SettingTextButton
        onClick={() => handleOpenModal('logout')}
        size='large'
        colorStyle='red'
      >
        로그아웃
      </SettingTextButton>

      <SettingTextButton
        onClick={() => handleOpenModal('signout')}
        size='large'
        colorStyle='gray'
      >
        회원 탈퇴
      </SettingTextButton>

      <Modal>
        {view === 'nickname' && <NicknameChange onClose={closeModal} />}
        {view === 'logout' && <Logout onClose={closeModal} />}
        {view === 'pwdchange' && <PasswordChange onClose={closeModal} />}
        {view === 'signout' && <SignOut onClose={closeModal} />}
      </Modal>
    </div>
  );
};

export default LoginUser;
