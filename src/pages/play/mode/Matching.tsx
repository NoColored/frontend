import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import { useWebSocket } from '@/hooks/useWebSocket';

import { MatchingText } from '@/pages/play/mode/MatchingText';

import { deleteMatching } from '@/services/matching';

import { ROUTE } from '@/router/constants';

interface Props {
  imgSrc: string;
  closeModal: () => void;
  isOpen: boolean;
}

const Matching = ({ imgSrc, closeModal, isOpen }: Props) => {
  const navigate = useNavigate();

  useWebSocket((message) => {
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
