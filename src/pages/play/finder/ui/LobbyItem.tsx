import * as styles from './index.css';
import MessageModalContent from './MessageModalContent';
import PasswordModal from './PasswordModal';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/image-box';
import Modal, { useModal } from '@/components/modal';

import { MAPS } from '@/models/map';

interface Props {
  roomInfo: RoomListItem;
}

const LobbyItem = ({ roomInfo }: Props) => {
  const { modalRef, openModal, closeModal } = useModal();

  const renderModalContent = () => {
    if (roomInfo.userNumber === 4) {
      return (
        <div className={styles.messageModalWrapper}>
          <MessageModalContent failed='ENTER' />
          <ColoredButton
            size='small'
            text='거리두기'
            color='yellow'
            onClick={closeModal}
          />
        </div>
      );
    }
    return (
      <PasswordModal closeModal={closeModal} roomCode={roomInfo.roomCode} />
    );
  };

  return (
    <>
      <div
        tabIndex={0}
        role='button'
        className={styles.lobbyItemWrapper}
        onClick={openModal}
      >
        <RoundCornerImageBox size='full' imgSrc={MAPS[roomInfo.mapId].imgSrc} />
        <div className={styles.textsWrapper}>
          <div className={styles.lobbyTitleText}>{roomInfo.roomTitle}</div>
          <div
            className={styles.playerCountText}
          >{`${roomInfo.userNumber}/4`}</div>
        </div>
      </div>
      <Modal ref={modalRef}>{renderModalContent()}</Modal>
    </>
  );
};

export default LobbyItem;
