import * as styles from './index.css';

import type { ColoredTextBoxProps } from '@/components/textbox/types.d';

const ColoredTextBox = ({ color, icon, text, size }: ColoredTextBoxProps) => {
  return (
    <div className={styles.coloredTextBoxStyle({ color, size })}>
      {icon && <img className={styles.iconStyle} src={icon} alt='icon' />}
      {text}
    </div>
  );
};

export default ColoredTextBox;
