import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import SettingIconButton from '@/components/button/SettingIconButton/index';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';
import Index from '@/components/Modal/informationModal/index';
import Setting from '@/components/Modal/settingModal/index';

import useModal from '@/hooks/useModal';
import { ModalType } from '@/components/Modal/informationModal/constants';

interface Props {
  children: ReactNode;
  backButtonLabel?: string;
}

const BasicContentFrame = ({ children, backButtonLabel }: Props) => {
  const { Modal, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState<ModalType>(0);
  const navigate = useNavigate();

  const selectModalType = (type: ModalType) => {
    setModalType(type);
    openModal();
  };

  return (
    <div className={styles.frame}>
      <div className={styles.iconButtons}>
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-information-h50w50.png'
          alt='info'
          onClick={() => selectModalType(ModalType.info)}
        />
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-home-h50w50.png'
          alt='home'
          onClick={() => navigate('/home')}
        />
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-setting-h50w50.png'
          alt='setting'
          onClick={() => selectModalType(ModalType.setting)}
        />
      </div>
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton label={backButtonLabel} />
          </div>
        )}
        <Modal>
          {modalType === ModalType.info && <Index onClose={closeModal} />}
          {modalType === ModalType.setting && <Setting onClose={closeModal} />}
        </Modal>
        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
