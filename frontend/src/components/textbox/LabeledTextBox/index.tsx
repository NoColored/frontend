import * as styles from './index.css.ts';

import type { LabeledtextboxProps } from '@/components/textbox/types.d.ts';

const LabeledTextBox = ({
  labelColor,
  titleColor,
  labelText,
  titleText,
}: LabeledtextboxProps) => {
  return (
    <div>
      <div
        className={styles.textStyle({
          textPosition: 'label',
          color: labelColor,
        })}
      >
        {labelText}
      </div>
      <div
        className={styles.textStyle({
          textPosition: 'title',
          color: titleColor,
        })}
      >
        {titleText}
      </div>
    </div>
  );
};

export default LabeledTextBox;
