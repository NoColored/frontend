import * as styles from './index.css.ts';

import type { labeledtextboxProps } from '@/components/textbox/textbox.d.ts';

interface Props {
  props: labeledtextboxProps;
}

const LabeledTextBox = ({ props }: Props) => {
  return (
    <div>
      <div
        className={styles.textStyle({
          textPosition: 'label',
          color: props.labelColor,
        })}
      >
        {props.labelText}
      </div>
      <div
        className={styles.textStyle({
          textPosition: 'title',
          color: props.titleColor,
        })}
      >
        {props.titleText}
      </div>
    </div>
  );
};

export default LabeledTextBox;
