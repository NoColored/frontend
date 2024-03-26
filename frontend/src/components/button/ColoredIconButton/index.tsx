import * as styles from './index.css';

import type {
  ColorButtonProps,
  coloredIconButtonSizeType,
} from '@/components/button/types';

interface Props extends ColorButtonProps {
  icon: string;
  size: coloredIconButtonSizeType;
}

const ColoredIconButton = ({ text, icon, color, size, onClick }: Props) => {
  return (
    <button
      type='button'
      className={styles.coloredIconButtonStyle({ color, size })}
      onClick={onClick}
    >
      <img className={styles.iconStyle} src={icon} alt={text} />
      <span className={styles.textStyle}>{text}</span>
    </button>
  );
};

export default ColoredIconButton;
