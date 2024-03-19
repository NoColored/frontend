import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { LOW_TIER_INFO, HIGH_TIER_INFO } from '@/components/imagebox/constants';
import * as styles from '@/components/Modal/informationModal/index.css';

const TierInfo = () => {
  return (
    <div>
      <SettingNavigationButton label='뒤로' />
      <div className={styles.text}>티어</div>
      <div className={styles.lowTierStyle}>
        {Object.entries(LOW_TIER_INFO).map(([tier, { description, score }]) => (
          <div key={tier} className={styles.tierWrapper}>
            <div className={styles.boxWrapper}>
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
