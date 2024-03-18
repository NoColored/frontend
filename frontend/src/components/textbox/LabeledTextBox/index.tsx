import * as styles from './index.css';

import type { LabeledTextboxProps } from '@/components/textbox/types.d';

const LabeledTextBox = ({
  labelColor,
  contentColor,
  labelText,
  contentText,
}: LabeledTextboxProps) => {
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
          textPosition: 'content',
          color: contentColor,
        })}
      >
        {contentText}
      </div>
    </div>
  );
};

export default LabeledTextBox;
