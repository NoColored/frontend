import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AudioButton from './audio-button';
import * as styles from './index.css';
import MenuButton from './menu-button';

import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

import FullScreenPrompt from '@/pages/landing/FullScreenPrompt';

import useAudioStore from '@/states/music';

interface Props {
  children: ReactNode;
  backButtonLabel?: string;
  leftButton?: {
    navigateTo?: string;
  };
  disableButton?: boolean;
  disableMenu?: boolean;
}

const BasicContentFrame = ({
  children,
  backButtonLabel,
  leftButton,
  disableButton,
  disableMenu,
}: Props) => {
  const navigate = useNavigate();
  const { isPlaying, playBackgroundSound, stopBackgroundSound } =
    useAudioStore();

  const handleNavigate = () =>
    leftButton?.navigateTo
      ? navigate(leftButton.navigateTo, { replace: true })
      : navigate(-1);

  useEffect(() => {
    // 자동으로 음악 재생 상태를 설정합니다.
    isPlaying ? playBackgroundSound() : stopBackgroundSound();
  }, [isPlaying, playBackgroundSound, stopBackgroundSound]);

  return (
    <div className={styles.frame}>
      <FullScreenPrompt />
      {!disableButton && (
        <div className={styles.iconButtons}>
          <AudioButton />
          {!disableMenu && <MenuButton />}
        </div>
      )}
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton
              label={backButtonLabel}
              onClick={handleNavigate}
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
