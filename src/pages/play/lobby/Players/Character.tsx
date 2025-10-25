import { EMPTY_PLAYER_COLOR, PLAYER_COLORS } from '../constants';
import * as styles from './index.css';

import Chip from '@/components/chip';
import RoundCornerImageBox from '@/components/image-box';

const getState = (player: Player) => {
  if (player.isMaster) {
    return '방장';
  }
  if (player.ready) {
    return 'READY';
  }
  return '';
};

const PLAYER_ICON = Array.from(
  { length: 4 },
  (_, i) =>
    `/images/ui/icon/shape/icon-shape-white-small-player${i}-h16w16.png`,
);

type Props = {
  player: Player;
  index: number;
};

const Character = ({ player, index }: Props) => {
  const state = getState(player);
  const color = player.userCode ? PLAYER_COLORS[index] : EMPTY_PLAYER_COLOR;

  return (
    <div className={styles.character({ color })}>
      <RoundCornerImageBox
        size='full'
        imgSrc={player.skin}
        backgroundColor='white'
      >
        {state && (
          <Chip
            responsive
            color={PLAYER_COLORS[index]}
            text={state}
            icon={PLAYER_ICON[index]}
          />
        )}
      </RoundCornerImageBox>
    </div>
  );
};

export default Character;
