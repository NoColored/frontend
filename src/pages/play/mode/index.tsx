import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMatching } from './api';
import * as styles from './index.css';
import Matching from './ui/Matching';

import ColoredIconButton from '@/components/button/ColoredIconButton';
import Modal, { useModal } from '@/components/modal';
import RankingItemBox from '@/components/ranking';

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
          icon='/images/ui/icon/button/icon-button-modemulti-h50w50.png'
          size='xlarge'
          text='친선전'
          color='pink'
          onClick={() => {
            navigate(`${ROUTE.finder}`);
          }}
        />
        <ColoredIconButton
          icon='/images/ui/icon/button/icon-button-moderank-h50w50.png'
          size='xlarge'
          text='랭킹전'
          color='yellow'
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
