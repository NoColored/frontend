import Chip from '@/components/chip';

import * as constants from '@/pages/play/lobby/constants';
import { EMPTY_PLAYER_COLOR } from '@/pages/play/lobby/constants';
import * as styles from '@/pages/play/lobby/Players/index.css';

interface Props {
  player: Player;
  state: string;
}

const State = ({ player, state }: Props) => {
  if (player.color === EMPTY_PLAYER_COLOR) {
    return <div className={styles.empty}>?</div>;
  }

  return (
    <Chip
      responsive
      color={player.color}
      text={state}
      icon={constants.PLAYER_ICON[player.color]}
    />
  );
};

export default State;
