import * as styles from './index.css';

import useModal from '@/hooks/useModal';

import ModalContent from '@/pages/play/finder/Modal/CreateLobby/ModalContent';

const SettingButton = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal} className={styles.button}>
        <img
          src='/images/ui/icon/button/icon-button-lobbysetting-h50w50.png'
          className={styles.icon}
        />
        <div className={styles.text}>설정 변경</div>
      </button>
      <Modal>
        <ModalContent mapType='food' closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default SettingButton;
