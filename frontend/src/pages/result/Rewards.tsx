import * as constants from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

interface Props {
  closeModal: () => void;
  skin: string[];
}

const Rewards = ({ closeModal, skin }: Props) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.ribbonWrapper}>
        <div className={styles.rewardRibbon}>
          <img
            className={styles.tierRibbonImage}
            src={constants.MODAL_RIBBON}
            alt='Reward Ribbon'
          />
        </div>
        <div className={styles.rewardBox}>
          <img
            className={styles.rewardBoxImage}
            src={constants.MODAL_REWARDBOX}
            alt='Reward Box'
          />
        </div>
      </div>
      <div className={styles.rewardListWrapper}>
        {skin.map((item) => (
          <div key={item}>
            <RoundCornerImageBox
              size='medium'
              imgSrc={item}
              backgroundColor='white'
              borderColor='black'
              borderSize='1x'
            />
          </div>
        ))}
      </div>
      <span className={styles.modalMessage}>{constants.REWARD_MESSAGE}</span>
      <ColoredButton
        size='small'
        text='확인'
        color='green'
        onClick={closeModal}
      />
    </div>
  );
};

export default Rewards;
