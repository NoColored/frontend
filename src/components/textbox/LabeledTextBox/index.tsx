import * as styles from './index.css';

import type { textColorType } from '@/components/textbox/types';

interface Props {
  contentColor?: textColorType;
  labelColor?: textColorType;
  contentText: string;
  labelText: string;
}

const LabeledTextBox = ({
  labelColor,
  contentColor,
  labelText,
  contentText,
}: Props) => {
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
