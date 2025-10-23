import * as styles from './index.css';

import type {
  ColorButtonProps,
  coloredIconButtonSizeType,
} from '@/components/button/types';

import { useEffectSound } from '@/features/sound';

export interface ColoredIconButtonProps extends ColorButtonProps {
  icon: string;
  size: coloredIconButtonSizeType;
}

const ColoredIconButton = ({
  text,
  icon,
  color,
  size,
  onClick,
}: ColoredIconButtonProps) => {
  const { playEffectSound } = useEffectSound();

  const handleClick = () => {
    playEffectSound();
    onClick();
  };

  return (
    <button
      type='button'
      className={styles.coloredIconButtonStyle({ color, size })}
      onClick={handleClick}
    >
      <img className={styles.iconStyle} src={icon} alt={text} />
      <span className={styles.textStyle}>{text}</span>
    </button>
  );
};

export default ColoredIconButton;
