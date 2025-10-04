import * as styles from './index.css';
import { indexProps } from './types';

import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { HIGH_TIER_INFO, LOW_TIER_INFO } from '@/components/imagebox/constants';
import TierBox from '@/components/imagebox/TierIconBox';

const TierInfo = ({ onBack, onClose }: indexProps) => {
  return (
    <>
      <SettingNavigationButton
        label='뒤로'
        onClick={onBack}
        position='leftTop'
      />
      <SettingNavigationButton
        label='닫기'
        onClick={onClose}
        position='rightTop'
      />
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
