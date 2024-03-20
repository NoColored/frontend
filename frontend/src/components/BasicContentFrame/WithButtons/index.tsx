import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import { ModalType, Props } from '@/components/BasicContentFrame/constants';
import Index from '@/components/BasicContentFrame/WithButtons/InformationModal/index';
import Settings from '@/components/BasicContentFrame/WithButtons/SettingModal/index';
import SettingIconButton from '@/components/button/SettingIconButton/index';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

import useModal from '@/hooks/useModal';

const BasicContentFrame = ({ children, backButtonLabel }: Props) => {
  const { Modal, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState<ModalType>();
  const navigate = useNavigate();

  const selectModalType = (type: ModalType) => {
    setModalType(type);
    openModal();
  };

  return (
    <div className={styles.frame}>
      <div className={styles.iconButtons}>
        <SettingIconButton
          src='images/ui/icon/button/icon-button-information-h50w50.png'
          alt='info'
          onClick={() => selectModalType('info')}
        />
        <SettingIconButton
          src='/images/ui/icon/button/icon-button-home-h50w50.png'
          alt='home'
          onClick={() => navigate('/home')}
        />
        <SettingIconButton
          src='/images/ui/icon/button/icon-button-setting-h50w50.png'
          alt='setting'
          onClick={() => selectModalType('settings')}
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
          {modalType === 'info' && (
            <Index onClose={closeModal} onBack={() => {}} />
          )}
          {modalType === 'settings' && <Settings onClose={closeModal} />}
        </Modal>
        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
