import * as styles from '@/components/BasicContentFrame/WithButtons/SettingModal/index.css';
import SettingTextButton from '@/components/button/SettingTextButton';
import { useState } from 'react';
import { settingType } from '@/components/BasicContentFrame/WithButtons/SettingModal/types';
import NicknameChange from '@/components/BasicContentFrame/WithButtons/SettingModal/NicknameChange';
import PasswordChange from '@/components/BasicContentFrame/WithButtons/SettingModal/PasswordChange';
import Logout from '@/components/BasicContentFrame/WithButtons/SettingModal/Logout';
import SignOut from '@/components/BasicContentFrame/WithButtons/SettingModal/SignOut';
import Modal from '@/components/Modal';

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
        <Modal isOpen={true} onClose={handleCloseModal}>
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
