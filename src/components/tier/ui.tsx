import { styles } from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type Props = Required<NonNullable<RecipeVariants<typeof styles.tierBox>>>;

const Tier = ({ tier, size }: Props) => {
  return <div className={styles.tierBox({ tier, size })} />;
};

export default Tier;
