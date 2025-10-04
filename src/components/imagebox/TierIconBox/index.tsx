import * as styles from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type Props = Required<NonNullable<RecipeVariants<typeof styles.tierBox>>>;

const TierBox = ({ tier, size }: Props) => {
  return <div className={styles.tierBox({ tier, size })} />;
};

export default TierBox;
