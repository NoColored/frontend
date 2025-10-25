import * as styles from './index.css';

import type {
  ColorButtonProps,
  coloredButtonSizeType,
} from '@/components/button/types';

import { useEffectSound } from '@/features/sound';

interface Props extends ColorButtonProps {
  size: coloredButtonSizeType;
}

const ColoredButton = ({ text, color, size, onClick }: Props) => {
  const { playEffectSound } = useEffectSound();

  const handleClick = () => {
    playEffectSound();
    onClick();
  };

  return (
    <button
      type='button'
      className={styles.coloredButtonStyle({ color, size })}
      onClick={handleClick}
    >
      <span className={styles.textStyle}>{text}</span>
    </button>
  );
};

export default ColoredButton;
