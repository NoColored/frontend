import { useNavigate } from 'react-router-dom';

import { deleteMatching } from './api';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/image-box';

import { MatchingText } from '@/pages/play/mode/MatchingText';

import { useWebSocket } from '@/features/websocket';
import { ROUTE } from '@/shared/constants';

interface Props {
  imgSrc: string;
  closeModal: () => void;
  isOpen: boolean;
}

const Matching = ({ imgSrc, closeModal, isOpen }: Props) => {
  const navigate = useNavigate();

  useWebSocket((message: WebsocketMessageRankedMatch) => {
    if (message.action === 'matching') {
      navigate(ROUTE.game);
      return;
    }
    if (message.action === 'matchingCancel') {
      closeModal();
    }
  });

  return (
    <div className={styles.matchingModalWrapper}>
      <MatchingText isModalOpen={isOpen} />
      <div className={styles.matchingImageWrapper}>
        <RoundCornerImageBox
          size='large'
          imgSrc={imgSrc}
          borderColor='black'
          borderSize='5x'
        />
      </div>
      <ColoredButton
        size='small'
        text='취소'
        color='navy'
        onClick={() => {
          deleteMatching();
          closeModal();
        }}
      />
    </div>
  );
};

export default Matching;
