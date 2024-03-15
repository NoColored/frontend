import * as styles from './index.css.ts';

import type { ColoredButtonProps } from '@/components/button/types';

const ColoredButton = ({ text, color, size, onClick }: ColoredButtonProps) => {
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
