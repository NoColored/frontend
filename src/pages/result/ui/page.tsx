import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from '../constants';
import * as styles from './index.css';
import ResultInfoBox from './ResultInfoBox';
import { RewardsModal } from './RewardsModal';

import ColoredButton from '@/components/button/ColoredButton';
import Modal, { useModal } from '@/components/modal';

import { getOut } from '@/services/lobby';

import { ROUTE } from '@/constants/routes';
import { useUserCode } from '@/models/user';

const Result = () => {
  const navigate = useNavigate();
  const { roomUuid, players, reward } = useLoaderData() as GameResult;
  const myCode = useUserCode();
  const { modalRef, openModal, closeModal } = useModal();
  const hasTier = !!reward.tier && reward.tier.upgrade;
  const noReward = !hasTier && reward.skins.length === 0;

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
    <>
      <div className={styles.gameResultWrapper}>
        <div className={styles.result}>
          <div className={styles.resultTitle}>{constants.RESULTTEXT}</div>
          {players.map((item) => (
            <ResultInfoBox
              key={item.userCode}
              player={item}
              myResult={item.userCode === myCode}
            />
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
        <Modal ref={modalRef}>
          <RewardsModal
            tier={reward.tier}
            skin={reward.skins}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default Result;
