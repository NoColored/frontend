import { useState } from 'react';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/play/finder/index.css';
import * as modalStyles from '@/pages/play/finder/Modal/index.css';
import MessageModalContent from '@/pages/play/finder/Modal/MessageModalContent';
import PasswordModal from '@/pages/play/finder/Modal/PasswordModal';

interface Props {
  imgSrc: string;
  lobbyTitle: string;
  playerCount: number;
}

const LobbyItem = ({ imgSrc, lobbyTitle, playerCount }: Props) => {
  const { Modal, openModal, closeModal } = useModal();
  const [isMessage, setIsMessage] = useState(false);
  return (
    <>
      <div
        tabIndex={0}
        role='button'
        className={styles.partyItemWrapper}
        onClick={openModal}
      >
        <RoundCornerImageBox size='full' imgSrc={imgSrc} />
        <div className={styles.textsWrapper}>
          <div className={styles.lobbyTitleText}>{lobbyTitle}</div>
          <div className={styles.playerCountText}>{`${playerCount}/4`}</div>
        </div>
      </div>
      <Modal>
        {isMessage ? (
          <div
            className={`${modalStyles.modalWrapper} ${modalStyles.messageModalWrapper}`}
          >
            <MessageModalContent failed='PASSWORD' />
            <ColoredButton
              size='small'
              text='재시도'
              color='green'
              onClick={() => setIsMessage(false)}
            />
          </div>
        ) : (
          <PasswordModal
            buttonLeft={closeModal}
            buttonRight={() => {
              setIsMessage(true);
            }}
          />
        )}
      </Modal>
    </>
  );
};

export default LobbyItem;
