import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import { User } from '@/types/auth';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredIconButton from '@/components/button/ColoredIconButton';

import useModal from '@/hooks/useModal';

import Matching from '@/pages/play/mode/Matching';
import RankingItemBox from '@/pages/ranking/RankingItemBox';

import { getMatching } from '@/services/matching';

import { ROUTE } from '@/router/constants';

const Mode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Modal, openModal, closeModal } = useModal({
    onOpen: () => setIsModalOpen(true),
    onClose: () => setIsModalOpen(false),
  });
  const navigate = useNavigate();
  const user = useLoaderData() as User;

  const startMatching = async () => {
    const matchingSuccess = await getMatching();
    if (matchingSuccess) {
      openModal();
    } else {
      navigate(`${ROUTE.error}/500`);
    }
  };

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.wrapper}>
        <ColoredIconButton
          icon={constants.FRIENDLY.icon}
          size='xlarge'
          text={constants.FRIENDLY.label}
          color={constants.FRIENDLY.color}
          onClick={() => {
            navigate(`${ROUTE.finder}`);
          }}
        />
        <ColoredIconButton
          icon={constants.RANKING.icon}
          size='xlarge'
          text={constants.RANKING.label}
          color={constants.RANKING.color}
          onClick={startMatching}
        />
        <div className={styles.myRank}>
          <RankingItemBox player={user} guest={user.guest} myRank />
        </div>
      </div>
      <Modal>
        <Matching
          imgSrc={user.skin}
          closeModal={closeModal}
          isOpen={isModalOpen}
        />
      </Modal>
    </BasicContentFrame>
  );
};

export default Mode;
