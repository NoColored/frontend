import { useState } from 'react';

import DeleteAccount from './delete-account';
import * as styles from './index.css';
import Logout from './Logout';
import NicknameChange from './NicknameChange';
import PasswordChange from './PasswordChange';

import SettingTextButton from '@/components/button/SettingTextButton';
import Modal, { useModal } from '@/components/modal';

const MODAL_ID = {
  nickname: 'nickname-change',
  logout: 'logout',
  password: 'password-change',
  delete: 'delete-account',
};

const MemberSetting = () => {
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
        onClick={() => handleOpenModal(MODAL_ID.nickname)}
        size='large'
        colorStyle='black'
      >
        닉네임 변경
      </SettingTextButton>

      <SettingTextButton
        onClick={() => handleOpenModal(MODAL_ID.password)}
        size='large'
        colorStyle='black'
      >
        비밀번호 변경
      </SettingTextButton>

      <SettingTextButton
        onClick={() => handleOpenModal(MODAL_ID.logout)}
        size='large'
        colorStyle='red'
      >
        로그아웃
      </SettingTextButton>

      <SettingTextButton
        onClick={() => handleOpenModal(MODAL_ID.delete)}
        size='large'
        colorStyle='gray'
      >
        회원 탈퇴
      </SettingTextButton>

      <Modal ref={modalRef}>
        {view === MODAL_ID.nickname && <NicknameChange onClose={closeModal} />}
        {view === MODAL_ID.logout && <Logout onClose={closeModal} />}
        {view === MODAL_ID.password && <PasswordChange onClose={closeModal} />}
        {view === MODAL_ID.delete && <DeleteAccount onClose={closeModal} />}
      </Modal>
    </div>
  );
};

export default MemberSetting;
