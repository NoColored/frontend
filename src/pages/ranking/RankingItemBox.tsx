import * as styles from './index.css';

import type { RankPlayer } from '@/types/rank';

import PlayerInfo from '@/components/player-info';
import TierBox from '@/components/tier';

interface RankingItemBoxProps {
  player: RankPlayer;
  guest?: boolean;
  myRank?: boolean;
}

const RankingItemBox = ({ player, guest, myRank }: RankingItemBoxProps) => {
  const rankTextWrapper =
    player.rank < 1000 ? styles.rankTextWrapper : styles.rankLongTextWrapper;

  const rank = guest ? '??' : `${player.rank}`;

  return (
    <div className={styles.rankingItemBox({ myRank })}>
      <span className={rankTextWrapper}>{rank}</span>

      <span className={styles.playerInfoBoxFixWidthWrapper}>
        <PlayerInfo
          label={player.label}
          nickname={player.nickname}
          imgSrc={player.skin}
        />
      </span>
      <span className={styles.tierAndScoreWrapper}>
        <TierBox tier={player.tier} size='xsmall' />
        <span>{player.rating}</span>
      </span>
    </div>
  );
};

export default RankingItemBox;
