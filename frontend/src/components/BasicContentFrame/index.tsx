import { ReactNode } from 'react';

import * as style from './index.css.ts';

import SettingIconButton from '@/components/SettingIconButton/index.tsx';
import SettingNavigationButton from '@/components/SettingNavigationButton/index.tsx';

interface Props {
  children: ReactNode;
  backButtonLable?: string;
}

const BasicContentFrame = ({ children, backButtonLable }: Props) => {
  return (
    <>
      <div className={style.iconButtons}>
        <SettingIconButton
          src='src/assets/ui/icon/button/icon-button-information-h50w50.png'
          alt='info'
        />
        <SettingIconButton
          src='src/assets/ui/icon/button/icon-button-home-h50w50.png'
          alt='home'
        />
        <SettingIconButton
          src='src/assets/ui/icon/button/icon-button-setting-h50w50.png'
          alt='setting'
        />
      </div>
      <div className={style.frame}>
        <main className={style.main}>
          {backButtonLable && (
            <div className={style.navigation}>
              <SettingNavigationButton label={backButtonLable} />
            </div>
          )}
          {children}
        </main>
      </div>
    </>
  );
};

export default BasicContentFrame;
