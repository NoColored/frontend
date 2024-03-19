import * as styles from './index.css';

import TierIconBox from '@/components/imagebox/TierIconBox';

import type { playerColorType } from '@/pages/play/lobby/types';

interface Props {
  color: playerColorType;
}

const PlayerInfo = ({ color }: Props) => {
  if (color === 'green') {
    return <div className={styles.playerInfoGray}>?</div>;
  }

  return (
    <div className={styles.playerInfoColored({ color })}>
      <TierIconBox tier='origin' size='full' />
      <div className={styles.titleAndName}>
        <div className={styles.title}>칭호</div>
        <div className={styles.name}>닉네임</div>
      </div>
    </div>
  );
};

export default PlayerInfo;
