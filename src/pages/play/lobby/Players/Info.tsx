import { memo } from 'react';

import * as styles from './index.css';

import TierIconBox from '@/components/tier';

import { PLAYER_COLORS } from '@/models/player';

interface Props {
  player: Player;
  index: number;
}

const PlayerInfo = memo(
  ({ player, index }: Props) => {
    console.log('render', index);

    if (!player.userCode) {
      return <div className={styles.playerInfoGray}>?</div>;
    }

    return (
      <div
        className={styles.playerInfoColored({ color: PLAYER_COLORS[index] })}
      >
        <TierIconBox tier={player.tier} size='full' />
        <div className={styles.titleAndName}>
          <div className={styles.title}>{player.label}</div>
          <div className={styles.name}>{player.nickname}</div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.player.userCode === nextProps.player.userCode,
);

export default PlayerInfo;
