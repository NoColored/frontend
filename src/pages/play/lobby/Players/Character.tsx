import * as styles from './index.css';

import RoundCornerImageBox from '@/components/image-box';

import State from '@/pages/play/lobby/Players/State';

const getState = (player: Player) => {
  if (player.isMaster) {
    return '방장';
  }
  if (player.ready) {
    return 'READY';
  }
  return '';
};

interface Props {
  player: Player;
}

const Character = ({ player }: Props) => {
  const state = getState(player);

  return (
    <div className={styles.character({ color: player.color })}>
      <RoundCornerImageBox
        size='full'
        imgSrc={player.skin}
        backgroundColor='white'
      >
        {state && <State player={player} state={state} />}
      </RoundCornerImageBox>
    </div>
  );
};

export default Character;
