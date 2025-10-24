import * as constants from '../../constants';
import * as styles from '../index.css';

import ColoredButton from '@/components/button/ColoredButton';
import TierBox from '@/components/tier';

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
        <TierBox tier={tier.oldtier} size='medium' />
        <img src={constants.MODAL_ARROW} alt='arrow' />
        <TierBox tier={tier.newtier} size='medium' />
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
