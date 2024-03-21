import * as constants from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

interface Props {
  closeModal: () => void;
}

const TierUpgrade = ({ closeModal }: Props) => {
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
        {/* 티어 이미지는 임시 데이터이므로 추후 코드 변경 예정 (백에서 데이터 가져와야 함) */}
        <img
          src='public/images/ui/icon/tier/icon-tier-bronze.svg'
          alt='previous tier'
        />
        <img src={constants.MODAL_ARROW} alt='arrow' />
        <img
          src='public/images/ui/icon/tier/icon-tier-silver.svg'
          alt='temp tier'
        />
      </div>
      <span className={styles.modalMessage}>
        Origin에 한 발자국 더 나아갔습니다!{' '}
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
