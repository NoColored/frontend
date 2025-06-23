import { useLocation, useNavigate } from 'react-router-dom';

import * as styles from '@/components/frame/with-buttons/index.css';
import ColoredButton from '@/components/button/ColoredButton';
import SettingIconButton from '@/components/button/SettingIconButton';

import useModal from '@/hooks/useModal';

import AudioSetting from '@/pages/settings/AudioSetting';

import { ROUTE } from '@/router/constants';

const SettingButton = () => {
  const { Modal, openModal, closeModal } = useModal();

  const navigate = useNavigate();

  const location = useLocation();
  const isPlaying = location.pathname.includes('/play/lobby');

  const handleClick = () => {
    if (location.pathname === '/settings') {
      return;
    }
    if (isPlaying) {
      openModal();
      return;
    }
    navigate(ROUTE.setting);
  };

  return (
    <>
      <SettingIconButton
        src='/images/ui/icon/button/icon-button-setting-h50w50.png'
        alt='setting'
        onClick={handleClick}
      />
      {isPlaying && (
        <Modal>
          <div className={styles.wrapper}>
            <div className={styles.title}>설정</div>
            <AudioSetting />
            <ColoredButton
              text='닫기'
              color='green'
              size='small'
              onClick={closeModal}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default SettingButton;
