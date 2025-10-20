import * as styles from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type StyleProps = NonNullable<RecipeVariants<typeof styles.chip>>;

type Props = {
  text: string;
  icon?: string;
} & Omit<StyleProps, 'color'> &
  Required<Pick<StyleProps, 'color'>>;

const Chip = ({ color, icon, text, responsive }: Props) => {
  return (
    <div className={styles.chip({ color, responsive })}>
      {icon && <img className={styles.icon} src={icon} alt='icon' />}
      {text}
    </div>
  );
};

export default Chip;
