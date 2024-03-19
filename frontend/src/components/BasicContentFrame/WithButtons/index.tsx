import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import SettingIconButton from '@/components/button/SettingIconButton/index';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';
import Index from '@/components/Modal/InformationModal/index';

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
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-information-h50w50.png'
          alt='info'
          onClick={() => openModal()}
        />
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-home-h50w50.png'
          alt='home'
          onClick={() => navigate('/home')}
        />
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-setting-h50w50.png'
          alt='setting'
          onClick={() => navigate('/settings')}
        />
      </div>
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton label={backButtonLabel} />
          </div>
        )}
        <Modal>{<Index onClose={closeModal} />}</Modal>
        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
