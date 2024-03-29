import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import type { Player } from '@/types/play';

import Character from '@/pages/play/lobby/Players/Character';
import PlayerInfo from '@/pages/play/lobby/Players/Info';
import ReadyButton from '@/pages/play/lobby/Players/ReadyButton';

interface Props {
  players: Player[];
}

const Players = ({ players }: Props) => {
  const navigate = useNavigate();
  const myCode = localStorage.getItem('userCode');
  const myInfo = players.find((player) => player.userCode === myCode);

  if (!myInfo) {
    navigate('/error/401');
    return null;
  }

  return (
    <div className={styles.playerWrapper}>
      <div className={styles.characterWrapper}>
        {players.map((player) => (
          <Character key={player.key} player={player} />
        ))}
      </div>
      <div className={styles.infoAndButtonWrapper}>
        <div className={styles.playerInfoWrapper}>
          {players.map((player) => (
            <PlayerInfo key={player.key} player={player} />
          ))}
        </div>
        <ReadyButton myInfo={myInfo} />
      </div>
    </div>
  );
};

export default Players;
