import * as styles from './index.css';

import Modal, { useModal } from '@/components/modal';

import RoomSetting from '@/features/room-setting';

interface Props {
  lobby: EnteredRoom;
}

const SettingButton = ({ lobby }: Props) => {
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <>
      <button type='button' onClick={openModal} className={styles.button}>
        <img
          src='/images/ui/icon/button/icon-button-lobbysetting-h50w50.png'
          alt='lobby-setting'
          className={styles.icon}
        />
        <div className={styles.text}>설정 변경</div>
      </button>
      <Modal ref={modalRef}>
        <RoomSetting
          mapId={lobby.mapId}
          roomTitle={lobby.roomTitle}
          roomPassword={lobby.roomPassword}
          closeModal={closeModal}
          type='update'
          buttonText='설정 변경'
        />
      </Modal>
    </>
  );
};

export default SettingButton;
