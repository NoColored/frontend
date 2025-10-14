import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import AudioButton from './audio-button';
import * as styles from './index.css';
import MenuButton from './menu-button';

import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

interface Props {
  children: ReactNode;
  leftButton?: {
    label: string;
    navigateTo?: string;
  };
  rightButtonsDisabled?: boolean;
  menuButtonDisabled?: boolean;
}

const BasicContentFrame = ({
  children,
  leftButton,
  rightButtonsDisabled,
  menuButtonDisabled,
}: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () =>
    leftButton?.navigateTo
      ? navigate(leftButton.navigateTo, { replace: true })
      : navigate(-1);

  return (
    <div className={styles.frame}>
      {!rightButtonsDisabled && (
        <div className={styles.iconButtons}>
          <AudioButton />
          {!menuButtonDisabled && <MenuButton />}
        </div>
      )}
      <main className={styles.main}>
        {leftButton && (
          <div className={styles.navigation}>
            <SettingNavigationButton
              label={leftButton.label}
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
