import PlayerInfo from '@/components/player-info';

import * as styles from '@/pages/result/index.css';
import type { colorStyles } from '@/pages/result/types';

export interface ResultInfoBoxProps {
  rank: number | string;
  imgSrc: string;
  label: string;
  nickname: string;
  gameScore: number;
  myResult: boolean;
  colorStyle: colorStyles;
}

const ResultInfoBox = ({
  rank,
  imgSrc,
  label,
  nickname,
  gameScore,
  myResult,
  colorStyle,
}: ResultInfoBoxProps) => {
  return (
    <div className={styles.resultInfoBox({ myResult, colorStyle })}>
      <span>{rank}</span>
      <div className={styles.playerInfoBoxWrapper}>
        <PlayerInfo label={label} imgSrc={imgSrc} nickname={nickname} />
      </div>
      <span className={styles.score}>{gameScore}</span>
    </div>
  );
};

export default ResultInfoBox;
