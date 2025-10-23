import { type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AudioButton from './audio-button';
import * as styles from './index.css';
import MenuButton from './menu-button';

import SettingNavigationButton from '@/components/button/SettingNavigationButton/index';

import { ROUTE } from '@/constants/routes';

const ALLOWED_PATHS = new Set([
  ROUTE.collection,
  ROUTE.ranking,
  ROUTE.play,
  ROUTE.finder,
  ROUTE.setting,
]);

const BackButton = ({ pathname }: { pathname: string }) => {
  const navigate = useNavigate();

  const allowed = ALLOWED_PATHS.has(pathname);

  if (!allowed) {
    return null;
  }

  return (
    <SettingNavigationButton
      usage='frame'
      label='< 뒤로'
      onClick={() => navigate(-1)}
      position='leftTop'
    />
  );
};

const DISABLED = {
  rightButtons: new Set([ROUTE.error, ROUTE.result]),
  menuButton: new Set([ROUTE.tutorial]),
};

const BasicContentFrame = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  const rightButtonsDisabled = DISABLED.rightButtons.has(pathname);

  const menuButtonDisabled = DISABLED.menuButton.has(pathname);

  return (
    <div className={styles.frame}>
      {!rightButtonsDisabled && (
        <div className={styles.iconButtons}>
          <AudioButton />
          {!menuButtonDisabled && <MenuButton />}
        </div>
      )}
      <main className={styles.main}>
        <BackButton pathname={pathname} />
        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
