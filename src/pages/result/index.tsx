import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { GameResult } from '@/types/result';

import BasicContentFrame from '@/components/frame/with-buttons';
import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import ResultInfoBox from '@/pages/result/ResultInfoBox';
import { RewardsModal } from '@/pages/result/RewardsModal/index';

import { getOut } from '@/services/lobby';

import { useUserStateStore } from '@/states/user';
import { useWebSocketStore } from '@/states/websocket';

import { ROUTE } from '@/router/constants';

const Result = () => {
  const navigate = useNavigate();
  const { roomUuid, players, reward } = useLoaderData() as GameResult;
  const myCode = useUserStateStore.getState().userCode;
  const { Modal, openModal, closeModal } = useModal();
  const hasTier = !!reward.tier && reward.tier.upgrade;
  const noReward = !hasTier && reward.skins.length === 0;
  const { webSocket } = useWebSocketStore.getState();

  useEffect(() => {
    webSocket.inGameUnconnected(() => {});
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
                myResult={item.userCode === myCode}
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
