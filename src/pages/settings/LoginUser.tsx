import { useState } from 'react';

import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';
import Modal, { useModal } from '@/components/modal';

import Logout from '@/pages/settings/Logout';
import NicknameChange from '@/pages/settings/NicknameChange';
import PasswordChange from '@/pages/settings/PasswordChange';
import SignOut from '@/pages/settings/SignOut';

const LoginUser = () => {
  const [view, setView] = useState<string | null>(null);
  const { modalRef, openModal, closeModal } = useModal({
    onClose: () => setView(null),
  });

  const handleOpenModal = (type: string) => {
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

      <Modal ref={modalRef}>
        {view === 'nickname' && <NicknameChange onClose={closeModal} />}
        {view === 'logout' && <Logout onClose={closeModal} />}
        {view === 'pwdchange' && <PasswordChange onClose={closeModal} />}
        {view === 'signout' && <SignOut onClose={closeModal} />}
      </Modal>
    </div>
  );
};

export default LoginUser;
