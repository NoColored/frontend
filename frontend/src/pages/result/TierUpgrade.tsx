import * as constants from './constants';
import * as styles from './index.css';

import type { TierReward } from '@/types/result';

import ColoredButton from '@/components/button/ColoredButton';

interface Props {
  closeModal: () => void;
  tier: TierReward;
}

const TierUpgrade = ({ closeModal, tier }: Props) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.ribbonWrapper}>
        <div className={styles.tierRibbon}>
          <img
            className={styles.tierRibbonImage}
            src={constants.MODAL_RIBBON}
            alt='Tier Ribbon'
          />
        </div>
        <div className={styles.diamond}>
          <img
            className={styles.tierDiamondImage}
            src={constants.MODAL_DIAMOND}
            alt='Tier Diamond'
          />
        </div>
      </div>
      <div className={styles.tierUpgradeWrapper}>
        <img src={tier.oldtier} alt='previous tier' />
        <img src={constants.MODAL_ARROW} alt='arrow' />
        <img src={tier.newtier} alt='temp tier' />
      </div>
      <span className={styles.modalMessage}>
        {tier.upgrade ? constants.TIER_UPGRADE_MESSAGE : ''}
      </span>
      <ColoredButton
        size='small'
        text='확인'
        color='green'
        onClick={closeModal}
      />
    </div>
  );
};

export default TierUpgrade;
