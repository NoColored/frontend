import { HIGH_TIER_INFO, LOW_TIER_INFO } from './constants';
import * as styles from './index.css';

import TierBox from '@/components/tier';

const TierInfo = () => {
  return (
    <>
      <div className={styles.text}>티어</div>
      <div className={styles.lowTierStyle}>
        {Object.entries(LOW_TIER_INFO).map(([tier, { description, score }]) => (
          <div key={tier} className={styles.tierWrapper}>
            <div className={styles.boxWrapper}>
              <TierBox size='small' tier={tier as tierRange} />
              <div>{description}</div>
              <div>{score}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.highTierStyle}>
        {Object.entries(HIGH_TIER_INFO).map(
          ([tier, { description, score }]) => (
            <div key={tier} className={styles.tierWrapper}>
              <div className={styles.boxWrapper}>
                <TierBox size='small' tier={tier as tierRange} />
                <div>{description}</div>
                <div>{score}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default TierInfo;
