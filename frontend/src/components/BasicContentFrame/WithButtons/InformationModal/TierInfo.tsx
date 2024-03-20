<<<<<<<< HEAD:frontend/src/components/BasicContentFrame/WithButtons/InformationModal/tierInfo.tsx
import * as styles from './index.css';
========
import * as styles from '@/components/BasicContentFrame/WithButtons/InformationModal/index.css';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { LOW_TIER_INFO, HIGH_TIER_INFO } from '@/components/imagebox/constants';
>>>>>>>> 5aba0f926a2dc51b411ca9217bfde070c9cc1553:frontend/src/components/BasicContentFrame/WithButtons/InformationModal/TierInfo.tsx

import { LOW_TIER_INFO, HIGH_TIER_INFO } from '@/components/imagebox/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { tierType } from '@/components/imagebox/types';
import TierBox from '@/components/imagebox/TierIconBox';
import { indexProps } from './types';

const TierInfo = ({ onBack }: indexProps) => {
  return (
    <div>
      <SettingNavigationButton label='뒤로' onClick={onBack} />
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
    </div>
  );
};

export default TierInfo;
