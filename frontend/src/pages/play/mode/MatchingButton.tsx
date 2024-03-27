import { useNavigate } from 'react-router-dom';

import ColoredButton from '@/components/button/ColoredButton';
import ColoredIconButton from '@/components/button/ColoredIconButton';

import useModal from '@/hooks/useModal';
import { useWebSocket } from '@/hooks/useWebSocket';

import * as constants from '@/pages/play/mode/constants';

import { deleteMatching, getMatching } from '@/services/matching';

import { ROUTE } from '@/router/constants';

const MatchingButton = () => {
  const navigate = useNavigate();
  const { Modal, openModal, closeModal } = useModal();

  const handleWebSocketMessage = (message: WebSocketMessage<actionType>) => {
    if (message.action === 'matching') {
      navigate(ROUTE.game);
      return;
    }
    if (message.action === 'matchingCancel') {
      closeModal();
    }
  };
  useWebSocket(handleWebSocketMessage);

  const startMatching = async () => {
    const matchingSuccess = await getMatching();
    if (matchingSuccess) {
      openModal();
    } else {
      navigate(`${ROUTE.error}/500`);
    }
  };

  return (
    <>
      <ColoredIconButton
        icon={constants.RANKING.icon}
        size='xlarge'
        text={constants.RANKING.label}
        color={constants.RANKING.color}
        onClick={startMatching}
      />

      <Modal>
        <div>매칭중</div>
        <ColoredButton
          size='small'
          text='취소'
          color='navy'
          onClick={deleteMatching}
        />
      </Modal>
    </>
  );
};

export default MatchingButton;
