import * as styles from './index.css';

import type {
  ColorButtonProps,
  coloredButtonSizeType,
} from '@/components/button/types';

interface Props extends ColorButtonProps {
  size: coloredButtonSizeType;
}
const ColoredButton = ({ text, color, size, onClick }: Props) => {
  return (
    <button
      type='button'
      className={styles.coloredButtonStyle({ color, size })}
      onClick={onClick}
    >
      <span className={styles.textStyle}>{text}</span>
    </button>
  );
};

export default ColoredButton;
