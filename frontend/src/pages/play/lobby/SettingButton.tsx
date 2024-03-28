import * as styles from './index.css';

import type { Lobby } from '@/types/play';

import useModal from '@/hooks/useModal';

import ModalContent from '@/pages/play/finder/Modal/CreateLobby/ModalContent';

import { updateRoom } from '@/services/lobby';

interface Props {
  lobby: Lobby;
}

const SettingButton = ({ lobby }: Props) => {
  const myCode = localStorage.getItem('userCode');
  const isMaster = lobby.players[lobby.masterIndex].userCode === myCode;
  if (!isMaster) {
    return <></>;
  }

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
        <ModalContent
          mapId={lobby.mapId}
          roomTitle={lobby.roomTitle}
          roomPassword={lobby.roomPassword}
          closeModal={closeModal}
          api={updateRoom}
          buttonText='설정 변경'
        />
      </Modal>
    </>
  );
};

export default SettingButton;
