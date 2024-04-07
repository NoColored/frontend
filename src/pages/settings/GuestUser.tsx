import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';

import useModal from '@/hooks/useModal';

import SignUp from '@/pages/landing/logIn/SignUp';
import { SETTING_TEXT_BUTTON_COLORS } from '@/pages/settings/constants';

const GuestUser = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <div className={styles.settingButtonWrapper}>
      {SETTING_TEXT_BUTTON_COLORS.map((color) => (
        <SettingTextButton
          onClick={openModal}
          size='large'
          colorStyle={color}
          key={color}
        >
          회원 전환
        </SettingTextButton>
      ))}
      <Modal>
        <SignUp closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default GuestUser;
