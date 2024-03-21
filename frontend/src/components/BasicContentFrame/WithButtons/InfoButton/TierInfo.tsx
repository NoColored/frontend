import { indexProps } from './types';

import * as styles from '@/components/BasicContentFrame/WithButtons/InfoButton/index.css';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { LOW_TIER_INFO, HIGH_TIER_INFO } from '@/components/imagebox/constants';
import TierBox from '@/components/imagebox/TierIconBox';
import { tierType } from '@/components/imagebox/types';

const TierInfo = ({ onBack }: indexProps) => {
  return (
    <>
      <SettingNavigationButton
        label='뒤로'
        onClick={onBack}
        position='leftTop'
      />
      <div className={styles.text}>티어</div>
      <div className={styles.lowTierStyle}>
        {Object.entries(LOW_TIER_INFO).map(([tier, { description, score }]) => (
          <div key={tier} className={styles.tierWrapper}>
            <div className={styles.boxWrapper}>
              <TierBox size='small' tier={tier as tierType} />
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
                <TierBox size='small' tier={tier as tierType} />
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
