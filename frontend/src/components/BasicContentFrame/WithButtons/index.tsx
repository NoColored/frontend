import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import InfoButton from '@/components/BasicContentFrame/WithButtons/InfoButton';
import Settings from '@/components/BasicContentFrame/WithButtons/SettingModal/index';
import SettingIconButton from '@/components/button/SettingIconButton/index';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

import useModal from '@/hooks/useModal';

interface Props {
  children: ReactNode;
  backButtonLabel?: string;
}

const BasicContentFrame = ({ children, backButtonLabel }: Props) => {
  const { Modal, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  return (
    <div className={styles.frame}>
      <div className={styles.iconButtons}>
        <InfoButton />

        <SettingIconButton
          src='/images/ui/icon/button/icon-button-home-h50w50.png'
          alt='home'
          onClick={() => navigate('/home')}
        />
        <SettingIconButton
          src='/images/ui/icon/button/icon-button-setting-h50w50.png'
          alt='setting'
          onClick={openModal}
        />
      </div>
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton
              label={backButtonLabel}
              onClick={() => navigate(-1)}
              position='leftTop'
            />
          </div>
        )}
        <Modal>
          <Settings onClose={closeModal} />
        </Modal>
        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
