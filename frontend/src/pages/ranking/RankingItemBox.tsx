import * as styles from './index.css';

import TierBox from '@/components/imagebox/TierIconBox';
import PlayerInfoBox from '@/components/PlayerInfoBox';

import type { tierRange } from '@/pages/ranking/types';

export interface RankingItemBoxProps {
  rank: number | string;
  imgSrc: string;
  label: string;
  nickname: string;
  tier: tierRange;
  score: number;
  myRank?: boolean;
}

const RankingItemBox = ({
  rank,
  imgSrc,
  label,
  nickname,
  tier,
  score,
  myRank,
}: RankingItemBoxProps) => {
  return (
    <div className={styles.rankingItemBox({ myRank })}>
      {typeof rank === 'string' || (typeof rank === 'number' && rank <= 999) ? (
        <span className={styles.rankTextWrapper}>{rank}</span>
      ) : (
        <span className={styles.rankLongTextWrapper}>{rank}</span>
      )}

      <span className={styles.playerInfoBoxFixWidthWrapper}>
        <PlayerInfoBox label={label} nickname={nickname} imgSrc={imgSrc} />
      </span>
      <span className={styles.tierAndScoreWrapper}>
        <TierBox tier={tier} size='xsmall' />
        <span>{score}</span>
      </span>
    </div>
  );
};

export default RankingItemBox;
