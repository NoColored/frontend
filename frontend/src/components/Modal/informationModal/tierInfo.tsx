import TierBox from '@/components/imagebox/TierIconBox';
import * as styles from '@/components/Modal/informationModal/index.css';

import { TIER_INFO_1, TIER_INFO_2 } from '@/components/imagebox/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';

const TierInfo = () => {
  return (
    <div>
      <SettingNavigationButton label='뒤로' />
      <div className={styles.text}>티어</div>
      <div className={styles.tierStyle1}>
        {TIER_INFO_1.map((tierInfo) => (
          <div key={tierInfo.tier} className={styles.tierWrapper}>
            <div className={styles.boxWrapper}>
              <TierBox size='small' tier={tierInfo.tier} />
              <div>{tierInfo.description}</div>
              <div>{tierInfo.score}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tierStyle2}>
        {TIER_INFO_2.map((tierInfo) => (
          <div key={tierInfo.tier} className={styles.tierWrapper}>
            <div className={styles.boxWrapper}>
              <TierBox size='small' tier={tierInfo.tier} />
              <div>{tierInfo.description}</div>
              <div>{tierInfo.score}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TierInfo;
