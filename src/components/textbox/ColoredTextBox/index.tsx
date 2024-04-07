import * as styles from './index.css';

import type {
  backgroundColorType,
  textSizeType,
} from '@/components/textbox/types';

interface Props {
  size: textSizeType;
  color: backgroundColorType;
  text: string;
  icon?: string;
}
const ColoredTextBox = ({ color, icon, text, size }: Props) => {
  return (
    <div className={styles.coloredTextBoxStyle({ color, size })}>
      {icon && <img className={styles.iconStyle} src={icon} alt='icon' />}
      {text}
    </div>
  );
};

export default ColoredTextBox;
