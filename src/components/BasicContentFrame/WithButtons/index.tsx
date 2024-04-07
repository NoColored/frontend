import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import InfoButton from '@/components/BasicContentFrame/WithButtons/InfoButton';
import SettingButton from '@/components/BasicContentFrame/WithButtons/SettingButton/index';
import SettingIconButton from '@/components/button/SettingIconButton/index';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

import FullScreenPrompt from '@/pages/landing/FullScreenPrompt';

import useAudioStore from '@/states/music';

interface Props {
  children: ReactNode;
  backButtonLabel?: string;
  onBeforeButtonClick?: () => void;
  disableButton?: boolean;
}

const BasicContentFrame = ({
  children,
  backButtonLabel,
  onBeforeButtonClick,
  disableButton,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPlaying, playBackgroundSound, stopBackgroundSound } =
    useAudioStore();

  const handleHomeButtonClick = () => {
    if (onBeforeButtonClick) {
      onBeforeButtonClick();
    }
    if (location.pathname !== '/home') {
      navigate('/home', { replace: true });
    }
  };

  const handleBackButtonClick = () => {
    if (onBeforeButtonClick) {
      onBeforeButtonClick();
    }
    navigate(-1);
  };

  useEffect(() => {
    // 자동으로 음악 재생 상태를 설정합니다.
    isPlaying ? playBackgroundSound() : stopBackgroundSound();
  }, [isPlaying, playBackgroundSound, stopBackgroundSound]);

  return (
    <div className={styles.frame}>
      <FullScreenPrompt />
      {!disableButton && (
        <div className={styles.iconButtons}>
          <InfoButton />
          <SettingIconButton
            src='/images/ui/icon/button/icon-button-home-h50w50.png'
            alt='home'
            onClick={handleHomeButtonClick}
          />
          <SettingButton />
        </div>
      )}
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton
              label={backButtonLabel}
              onClick={handleBackButtonClick}
              position='leftTop'
            />
          </div>
        )}

        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
