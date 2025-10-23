import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import type { Player } from '@/types/play';

import ColoredButton from '@/components/button/ColoredButton';

import Character from '@/pages/play/lobby/Players/Character';
import PlayerInfo from '@/pages/play/lobby/Players/Info';
import ReadyButton from '@/pages/play/lobby/Players/ReadyButton';

import { ROUTE } from '@/constants/routes';

interface Props {
  players: Player[];
  myCode: User['userCode'];
}

const Players = ({ players, myCode }: Props) => {
  const navigate = useNavigate();
  const myInfo = players.find((player) => player.userCode === myCode);

  if (!myInfo) {
    return (
      <pre className={styles.error}>
        {`로그인 정보가 유효하지 않습니다\n다시 로그인 해주세요`}
        <ColoredButton
          size='small'
          text='확인'
          color='green'
          onClick={() => {
            navigate(ROUTE.main, { replace: true });
          }}
        />
      </pre>
    );
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
