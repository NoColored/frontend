import PlayerInfoBox from '@/components/PlayerInfoBox';

import * as styles from '@/pages/result/index.css';
import type { colorStyles } from '@/pages/result/types';

export interface ResultInfoBoxProps {
  rank: number | string;
  imgSrc: string;
  label: string;
  nickname: string;
  gameScore: number;
  firstResult?: boolean;
  colorStyle: colorStyles;
}

const ResultInfoBox = ({
  rank,
  imgSrc,
  label,
  nickname,
  gameScore,
  firstResult,
  colorStyle,
}: ResultInfoBoxProps) => {
  return (
    <div className={styles.resultInfoBox({ firstResult, colorStyle })}>
      <span>{rank}</span>
      <PlayerInfoBox label={label} imgSrc={imgSrc} nickname={nickname} />
      <span>{gameScore}</span>
    </div>
  );
};

export default ResultInfoBox;
