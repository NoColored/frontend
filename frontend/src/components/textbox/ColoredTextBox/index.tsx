import * as styles from './index.css';

import type { ColoredTextBoxProps } from '@/components/textbox/types.d';

const ColoredTextBox = ({
  color,
  icon,
  text,
  inImageBox,
}: ColoredTextBoxProps) => {
  return (
    <div className={styles.coloredTextBoxStyle({ color, inImageBox })}>
      {icon ? <img className={styles.iconStyle} src={icon} alt='icon' /> : null}
      {text}
    </div>
  );
};

export default ColoredTextBox;
