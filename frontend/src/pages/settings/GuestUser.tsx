import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';

import useModal from '@/hooks/useModal';

import SignUp from '@/pages/landing/logIn/SignUp';

const GuestUser = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <div className={styles.underButtonWrapper}>
      <div>
        <SettingTextButton onClick={openModal} size='large' colorStyle='black'>
          회원 전환
        </SettingTextButton>
        <SettingTextButton onClick={openModal} size='large' colorStyle='red'>
          회원 전환
        </SettingTextButton>
      </div>
      <div>
        <SettingTextButton onClick={openModal} size='large' colorStyle='black'>
          회원 전환
        </SettingTextButton>
        <SettingTextButton onClick={openModal} size='large' colorStyle='gray'>
          회원 전환
        </SettingTextButton>
      </div>
      <Modal>
        <SignUp closeModal={closeModal} isGuest />
      </Modal>
    </div>
  );
};

export default GuestUser;
