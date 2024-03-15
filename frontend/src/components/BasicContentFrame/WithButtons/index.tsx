import { ReactNode } from 'react';

import * as styles from './index.css.ts';

import SettingIconButton from '@/components/button/SettingIconButton/index.tsx';
import SettingNavigationButton from '@/components/button/SettingNavigationButton/index.tsx';

interface Props {
  children: ReactNode;
  backButtonLabel?: string;
}

const BasicContentFrame = ({ children, backButtonLabel }: Props) => {
  return (
    <div className={styles.frame}>
      <div className={styles.iconButtons}>
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-information-h50w50.png'
          alt='info'
        />
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-home-h50w50.png'
          alt='home'
        />
        <SettingIconButton
          src='/src/assets/ui/icon/button/icon-button-setting-h50w50.png'
          alt='setting'
        />
      </div>
      <main className={styles.main}>
        {backButtonLabel && (
          <div className={styles.navigation}>
            <SettingNavigationButton label={backButtonLabel} />
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default BasicContentFrame;
