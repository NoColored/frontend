import { ReactNode } from 'react';

import * as styles from './index.css.ts';
import { settingButton } from './index.css.ts';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const SettingTextButton = ({
  children,
  size,
  colorStyle,
  onClick,
}: Props & styles.ButtonVariantsProps) => {
  return (
    <button
      type='button'
      className={settingButton({ size, colorStyle })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SettingTextButton;
