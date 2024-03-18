import * as styles from './index.css';

import { TierBoxProps } from '@/components/imagebox/types';

const TierBox = ({ tier, size }: TierBoxProps) => {
  return <div className={styles.tierBox({ tier, size })} />;
};

export default TierBox;
