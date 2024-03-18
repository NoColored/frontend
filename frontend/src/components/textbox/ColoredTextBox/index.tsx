import * as styles from './index.css';

import type { ColoredTextBoxProps } from '@/components/textbox/types.d.ts';

const ColoredTextBox = ({ color, icon, text }: ColoredTextBoxProps) => {
  return (
    <div className={styles.coloredTextBoxStyle({ color })}>
      {icon ? <img className={styles.iconStyle} src={icon} alt='icon' /> : null}
      {text}
    </div>
  );
};

export default ColoredTextBox;
