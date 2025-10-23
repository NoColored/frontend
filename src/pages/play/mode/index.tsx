import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import ColoredIconButton from '@/components/button/ColoredIconButton';
import RankingItemBox from '@/components/ranking';

import useModal from '@/hooks/useModal';

import Matching from '@/pages/play/mode/Matching';

import { getMatching } from '@/services/matching';

import { ROUTE } from '@/constants/routes';
import { useUserInfo } from '@/features/user';

const Mode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Modal, openModal, closeModal } = useModal({
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
      <Modal>
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
