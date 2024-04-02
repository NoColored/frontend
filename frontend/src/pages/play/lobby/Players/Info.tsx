import * as styles from './index.css';

import type { Player } from '@/types/play';

import TierIconBox from '@/components/imagebox/TierIconBox';
import type { tierType } from '@/components/imagebox/types';

interface Props {
  player: Player;
}

const PlayerInfo = ({ player }: Props) => {
  if (!player.userCode) {
    return <div className={styles.playerInfoGray}>?</div>;
  }

  return (
    <div className={styles.playerInfoColored({ color: player.color })}>
      <TierIconBox tier={player.tier as tierType} size='full' />
      <div className={styles.titleAndName}>
        <div className={styles.title}>{player.label}</div>
        <div className={styles.name}>{player.nickname}</div>
      </div>
    </div>
  );
};

export default PlayerInfo;
