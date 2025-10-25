import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import ColoredIconButton from '@/components/button/ColoredIconButton';
import Modal, { useModal } from '@/components/modal';
import RankingItemBox from '@/components/ranking';


import Matching from '@/pages/play/mode/Matching';

import { getMatching } from '@/services/matching';

import { useUserInfo } from '@/models/user';
import { ROUTE } from '@/shared/constants';

const Mode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { modalRef, openModal, closeModal } = useModal({
    onOpen: () => setIsModalOpen(true),
    onClose: () => setIsModalOpen(false),
  });
  const navigate = useNavigate();
  const { user } = useUserInfo();

  const startMatching = async () => {
    const matchingSuccess = await getMatching();
    if (matchingSuccess) {
      openModal();
    } else {
      navigate(`${ROUTE.error}/500`);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <>
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
      <Modal ref={modalRef}>
        <Matching
          imgSrc={user.skin}
          closeModal={closeModal}
          isOpen={isModalOpen}
        />
      </Modal>
    </>
  );
};

export default Mode;
