import { ReactNode } from 'react';

import * as styles from './index.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
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
      className={styles.settingButton({ size, colorStyle })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SettingTextButton;
