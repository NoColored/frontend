import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { GameResult } from '@/types/result';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import MatchingButton from '@/pages/play/mode/MatchingButton';
import ResultInfoBox from '@/pages/result/ResultInfoBox';
import { RewardsModal } from '@/pages/result/RewardsModal/index';

import { getUser } from '@/services/auth';
import { getOut } from '@/services/lobby';

import { ROUTE } from '@/router/constants';

const Result = () => {
  const gameResult = useLoaderData() as GameResult;
  const [skin, setSkin] = useState<string>();
  const [isMore, setIsMore] = useState<boolean>(false);

  const { Modal, openModal, closeModal, isOpen } = useModal();
  const navigate = useNavigate();

  const handleCloseModal = async () => {
    await getOut();
    navigate(ROUTE.home, { replace: true });
    closeModal();
  };

  const handleClickExit = async () => {
    setIsMore(false);
    if (gameResult.reward.tier || gameResult.reward.skins) {
      openModal();
    } else {
      await getOut();
      navigate(ROUTE.home, { replace: true });
    }
  };

  const handleClickMore = async () => {
    setIsMore(true);
    if (gameResult.roomUuid) {
      navigate(`${ROUTE.lobby}/${gameResult.roomUuid}`, { replace: true });
    } else {
      openModal();
      const imgSrc = await getUser();
      setSkin(imgSrc.skin);
    }
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
              colorStyle={constants.COLOR_STYLES[item.index]}
              gameScore={item.score}
              firstResult={item.rank === 1}
            />
          </div>
        ))}
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

      <Modal>
        {!isMore && (
          <RewardsModal
            tier={gameResult.reward.tier}
            skin={gameResult.reward.skins}
            closeModal={handleCloseModal}
          />
        )}

        {isMore && skin && (
          <MatchingButton
            imgSrc={skin}
            closeModal={closeModal}
            isOpen={isOpen}
          />
        )}
      </Modal>
    </BasicContentFrame>
  );
};

export default Result;
