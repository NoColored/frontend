import { ReactNode } from 'react';

import * as styles from './index.css';

import useEffectSoundStore from "@/states/effect";

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
  const { playEffectSound } = useEffectSoundStore();

  const handleClick = () => {
    playEffectSound();
    onClick();
  };

  return (
    <button
      type="button"
      className={styles.settingButton({ size, colorStyle })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SettingTextButton;
