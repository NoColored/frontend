import * as styles from './index.css.ts';

import type { coloredTextBoxProps } from '@/components/textbox/types.d.ts';

interface Props {
  props: coloredTextBoxProps;
}

const ColoredTextBox = ({ props }: Props) => {
  return (
    <div className={styles.coloredTextBoxStyle({ color: props.color })}>
      {props.icon ? (
        <img className={styles.iconStyle} src={props.icon} alt='icon' />
      ) : null}
      {props.text}
    </div>
  );
};

export default ColoredTextBox;
