import * as styles from './index.css';

import { User } from '@/types/auth';

import TierBox from '@/components/imagebox/TierIconBox';
import PlayerInfoBox from '@/components/PlayerInfoBox';

interface RankingItemBoxProps {
  user: User;
  myRank?: boolean;
}

const RankingItemBox = ({ user, myRank }: RankingItemBoxProps) => {
  const rankTextWrapper =
    user.rank < 1000 ? styles.rankTextWrapper : styles.rankLongTextWrapper;

  return (
    <div className={styles.rankingItemBox({ myRank })}>
      <span className={rankTextWrapper}>{user.rank}</span>

      <span className={styles.playerInfoBoxFixWidthWrapper}>
        <PlayerInfoBox
          label={user.label}
          nickname={user.nickname}
          imgSrc={user.skin}
        />
      </span>
      <span className={styles.tierAndScoreWrapper}>
        <TierBox tier={user.tier} size='xsmall' />
        <span>{user.rating}</span>
      </span>
    </div>
  );
};

export default RankingItemBox;
