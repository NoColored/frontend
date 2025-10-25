import * as styles from './index.css';

import PlayerInfo from '@/components/player-info';

import { PLAYER_COLORS } from '@/models/player';

interface Props {
  player: PlayerRecord;
  myResult: boolean;
}

const ResultInfoBox = ({ player, myResult }: Props) => {
  const { rank, label, skin, nickname, score, index } = player;
  const colorStyle = PLAYER_COLORS[index];

  return (
    <div className={styles.resultInfoBox({ myResult, colorStyle })}>
      <span>{rank}</span>
      <PlayerInfo label={label} imgSrc={skin} nickname={nickname} />
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default ResultInfoBox;
