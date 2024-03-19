import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import { LOW_TIER_INFO, HIGH_TIER_INFO } from '@/components/imagebox/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { tierType } from '@/components/imagebox/types';
import TierBox from '@/components/imagebox/TierIconBox';

const TierInfo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SettingNavigationButton label='뒤로' onClick={() => navigate(-1)} />
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
