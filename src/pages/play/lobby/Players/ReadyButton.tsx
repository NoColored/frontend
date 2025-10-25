import { useState } from 'react';

import { EMPTY_PLAYER_COLOR, PLAYER_COLORS } from '../constants';
import * as styles from './index.css';

import type { AxiosError } from 'axios';

import ColoredButton from '@/components/button/ColoredButton';
import ColoredIconButton from '@/components/button/ColoredIconButton';
import Modal, { useModal } from '@/components/modal';

import { getReady } from '@/services/lobby';

const getText = (player: Player): string => {
  if (player.isMaster) {
    return '게임시작';
  }
  if (player.ready) {
    return '준비취소';
  }
  return '게임준비';
};

const LONELY_MASTER_MESSAGE =
  '혼자서 싸울 수는 없습니다. \n 혹시 친구가 없나요?';

const SOMEBODY_NOT_READY_MESSAGE = '싸움을 두려워하는 겁쟁이가 있나본데요?';

const PLAYER_ICON_LARGE = Array.from(
  { length: 4 },
  (_, i) => `/images/ui/icon/shape/icon-shape-white-big-player${i}-h48w48.png`,
);

interface Props {
  myInfo: Player;
  index: number;
}

const ReadyButton = ({ myInfo, index }: Props) => {
  const { modalRef, openModal, closeModal } = useModal();
  const [errorMessage, setErrorMessage] = useState('');

  const startGame = async () => {
    return getReady().catch(({ response }: AxiosError) => {
      if (response?.status === 400) {
        setErrorMessage(LONELY_MASTER_MESSAGE);
      } else if (response?.status === 406) {
        setErrorMessage(SOMEBODY_NOT_READY_MESSAGE);
      }
      openModal();
    });
  };

  const color =
    !myInfo.isMaster && myInfo.ready
      ? EMPTY_PLAYER_COLOR
      : PLAYER_COLORS[index];

  return (
    <>
      <ColoredIconButton
        size='large'
        onClick={myInfo.isMaster ? startGame : getReady}
        color={color}
        icon={PLAYER_ICON_LARGE[index]}
        text={getText(myInfo)}
      />
      <Modal ref={modalRef}>
        <div className={styles.readyWrapper}>
          <pre className={styles.errorMessage}>{errorMessage}</pre>
          <div className={styles.errorButtonWrapper}>
            <ColoredButton
              size='small'
              text='확인'
              color='navy'
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReadyButton;
