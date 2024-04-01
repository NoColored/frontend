import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { GameResult } from '@/types/result';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import ResultInfoBox from '@/pages/result/ResultInfoBox';
import { RewardsModal } from '@/pages/result/RewardsModal/index';

import { getOut } from '@/services/lobby';

import { ROUTE } from '@/router/constants';

const Result = () => {
  const navigate = useNavigate();
  const { roomUuid, players, reward } = useLoaderData() as GameResult;
  const { Modal, openModal, closeModal } = useModal();
  const noReward = !reward.tier && !reward.skins;

  useEffect(() => {
    if (!noReward) {
      openModal();
    }
  }, []);

  const handleClickExit = async () => {
    if (roomUuid) {
      await getOut();
    }
    navigate(ROUTE.home, { replace: true });
  };

  const handleClickMore = async () => {
    if (roomUuid) {
      navigate(`${ROUTE.lobby}/${roomUuid}`, { replace: true });
    } else {
      navigate(ROUTE.play, { replace: true });
    }
  };

  return (
    <BasicContentFrame disableButton>
      <div className={styles.gameResultWrapper}>
        <div className={styles.result}>
          <div className={styles.resultTitle}>{constants.RESULTTEXT}</div>

          {players.map((item) => (
            <div key={`${item.nickname}${item.rank}`}>
              <ResultInfoBox
                rank={item.rank}
                imgSrc={item.skin}
                label={item.label}
                nickname={item.nickname}
                colorStyle={constants.COLOR_STYLES[item.index]}
                gameScore={item.score}
                firstResult={item.rank === 1}
              />
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <ColoredButton
            text='나가기'
            color='gray300'
            size='small'
            onClick={handleClickExit}
          />
          <ColoredButton
            text='더하기'
            color='navy'
            size='small'
            onClick={handleClickMore}
          />
        </div>
      </div>

      {!noReward && (
        <Modal>
          <RewardsModal
            tier={reward.tier}
            skin={reward.skins}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </BasicContentFrame>
  );
};

export default Result;
