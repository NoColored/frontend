import { useLoaderData } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { GameResult } from '@/types/result';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import ResultInfoBox from '@/pages/result/ResultInfoBox';
import Rewards from '@/pages/result/Rewards';
import TierUpgrade from '@/pages/result/TierUpgrade';

const Result = () => {
  const gameResult = useLoaderData() as GameResult;
  const { Modal, openModal, closeModal } = useModal();

  const handleClickButtons = () => {
    openModal();
  };

  return (
    <BasicContentFrame>
      <div className={styles.gameResultWrapper}>
        <div className={styles.resultTextWrapper}>{constants.RESULTTEXT}</div>

        {gameResult.players.map((item) => (
          <div key={`${item.nickname}${item.rank}`}>
            <ResultInfoBox
              rank={item.rank}
              imgSrc={item.skin}
              label={item.label}
              nickname={item.nickname}
              colorStyle={item.index}
              gameScore={item.step}
              firstResult={item.rank === 1}
            />
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <ColoredButton
            text='나가기'
            color='gray300'
            size='small'
            onClick={handleClickButtons}
          />
          <ColoredButton
            text='더하기'
            color='navy'
            size='small'
            onClick={() => {}}
          />
        </div>
      </div>
      <Modal>
        {gameResult.reward.tier && (
          <TierUpgrade tier={gameResult.reward.tier} closeModal={closeModal} />
        )}
        {gameResult.reward.skin && (
          <Rewards skin={gameResult.reward.skin} closeModal={closeModal} />
        )}
      </Modal>
    </BasicContentFrame>
  );
};

export default Result;
