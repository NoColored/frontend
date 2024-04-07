import * as styles from './index.css';

import type { tierSizeType, tierType } from '@/components/imagebox/types';

interface Props {
  tier: tierType;
  size: tierSizeType;
}

const TierBox = ({ tier, size }: Props) => {
  return <div className={styles.tierBox({ tier, size })} />;
};

export default TierBox;
