import { ReactNode } from 'react';

import * as style from './index.css.ts';

import SettingIconButton from '@/components/SettingIconButton/index.tsx';

interface Props {
  children: ReactNode;
}

const BasicContentFrame = ({ children }: Props) => {
  return (
    <div className={style.frame}>
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
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default BasicContentFrame;
