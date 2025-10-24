import type { RoomListItem } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/image-box';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/play/finder/index.css';
import * as modalStyles from '@/pages/play/finder/Modal/index.css';
import MessageModalContent from '@/pages/play/finder/Modal/MessageModalContent';
import PasswordModal from '@/pages/play/finder/Modal/PasswordModal';

import { MAPS } from '@/constants/map';

interface Props {
  roomInfo: RoomListItem;
}

const LobbyItem = ({ roomInfo }: Props) => {
  const { Modal, openModal, closeModal } = useModal();

  const renderModalContent = () => {
    if (roomInfo.userNumber === 4) {
      return (
        <div className={modalStyles.messageModalWrapper}>
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
      <Modal>{renderModalContent()}</Modal>
    </>
  );
};

export default LobbyItem;
