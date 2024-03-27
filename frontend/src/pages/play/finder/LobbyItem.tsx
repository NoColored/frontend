import * as constants from './constants';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/play/finder/index.css';
import * as modalStyles from '@/pages/play/finder/Modal/index.css';
import MessageModalContent from '@/pages/play/finder/Modal/MessageModalContent';
import PasswordModal from '@/pages/play/finder/Modal/PasswordModal';

interface Props {
  userNumber: number;
  mapId: number;
  roomTitle: string;
  roomCode: string;
}

const LobbyItem = ({ mapId, roomTitle, roomCode, userNumber }: Props) => {
  const { Modal, openModal, closeModal } = useModal();

  const getImgSrc = () => {
    const mapItem = constants.MAPS.find((item) => item.mapId === mapId);
    return mapItem ? mapItem.imgSrc : undefined;
  };

  const renderModalContent = () => {
    if (userNumber === 4) {
      return (
        <div
          className={`${modalStyles.modalWrapper} ${modalStyles.messageModalWrapper}`}
        >
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
    return <PasswordModal closeModal={closeModal} roomCode={roomCode} />;
  };

  return (
    <>
      <div
        tabIndex={0}
        role='button'
        className={styles.lobbyItemWrapper}
        onClick={() => openModal()}
      >
        <RoundCornerImageBox size='full' imgSrc={getImgSrc()} />
        <div className={styles.textsWrapper}>
          <div className={styles.lobbyTitleText}>{roomTitle}</div>
          {/* // 이거 숫자가 안예뻐서 그냥 도형 텍스트 같은거 가능하지 않을까 싶기도 */}
          <div className={styles.playerCountText}>{`${userNumber}/4`}</div>
        </div>
      </div>
      <Modal>{renderModalContent()}</Modal>
    </>
  );
};

export default LobbyItem;
