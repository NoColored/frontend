import * as styles from './index.css';

import type { Player } from '@/types/play';

import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import State from '@/pages/play/lobby/Players/State';

interface Props {
  player: Player;
}

const Character = ({ player }: Props) => {
  return (
    <div className={styles.character({ color: player.color })}>
      <RoundCornerImageBox
        size='full'
        imgSrc={player.skin}
        backgroundColor='white'
      >
        <State player={player} />
      </RoundCornerImageBox>
    </div>
  );
};

export default Character;
