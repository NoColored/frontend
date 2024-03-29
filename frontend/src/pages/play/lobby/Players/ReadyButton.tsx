import { useState } from 'react';

import type { Player } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';
import ColoredIconButton, {
  ColoredIconButtonProps,
} from '@/components/button/ColoredIconButton';

import useModal from '@/hooks/useModal';

import * as constants from '@/pages/play/lobby/constants';
import { EMPTY_PLAYER_COLOR } from '@/pages/play/lobby/constants';

import { getReady } from '@/services/lobby';

const getButtonProps = (
  player: Player,
  startGame: () => void,
): ColoredIconButtonProps => {
  const props = {
    icon: constants.PLAYER_ICON_LARGE[player.color],
    color: player.color,
    size: 'large' as const,
    onClick: getReady,
  };
  if (player.isMaster) {
    return {
      ...props,
      text: '게임시작',
      onClick: startGame,
    };
  }
  if (player.ready) {
    return {
      ...props,
      text: '준비취소',
      color: EMPTY_PLAYER_COLOR,
    };
  }
  return {
    ...props,
    text: '게임준비',
  };
};

interface Props {
  myInfo: Player;
}

const ReadyButton = ({ myInfo }: Props) => {
  const { Modal, openModal, closeModal } = useModal();
  const [errorMessage, setErrorMessage] = useState('');

  const startGame = async () => {
    return getReady().catch((err) => {
      if (err.response.status === 400) {
        setErrorMessage('error: 400');
      } else if (err.response.status === 406) {
        setErrorMessage('error: 406');
      }
      openModal();
    });
  };

  const buttonProps = getButtonProps(myInfo, startGame);

  return (
    <>
      <ColoredIconButton {...buttonProps} />

      <Modal>
        <pre>{errorMessage}</pre>
        <ColoredButton
          size='small'
          text='확인'
          color='navy'
          onClick={closeModal}
        />
      </Modal>
    </>
  );
};

export default ReadyButton;
