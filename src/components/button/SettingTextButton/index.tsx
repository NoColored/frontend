import { ReactNode } from 'react';

import * as styles from './index.css';

import { useEffectSound } from '@/features/sound';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const SettingTextButton = ({
  children,
  size,
  colorStyle,
  onClick,
  disabled,
}: Props & styles.ButtonVariantsProps) => {
  const { playEffectSound } = useEffectSound();

  const handleClick = () => {
    playEffectSound();
    onClick();
  };

  return (
    <button
      type='button'
      className={styles.settingButton({ size, colorStyle, disabled })}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SettingTextButton;
