import { styles } from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type Props = {
  text: string;
  icon?: string;
} & Required<NonNullable<RecipeVariants<typeof styles.chip>>>;

const Chip = ({ color, icon, text, size }: Props) => {
  return (
    <div className={styles.chip({ color, size })}>
      {icon && <img className={styles.icon} src={icon} alt='icon' />}
      {text}
    </div>
  );
};

export default Chip;
