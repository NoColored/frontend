import { styles } from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type TextColor = NonNullable<RecipeVariants<typeof styles.textStyle>>['color'];

interface Props {
  primaryColor?: TextColor;
  secondaryColor?: TextColor;
  primaryText: string;
  secondaryText: string;
}

const TextBox = ({
  secondaryColor,
  primaryColor,
  secondaryText,
  primaryText,
}: Props) => {
  return (
    <div>
      <div
        className={styles.textStyle({
          textPosition: 'label',
          color: secondaryColor,
        })}
      >
        {secondaryText}
      </div>
      <div
        className={styles.textStyle({
          textPosition: 'content',
          color: primaryColor,
        })}
      >
        {primaryText}
      </div>
    </div>
  );
};

export default TextBox;
