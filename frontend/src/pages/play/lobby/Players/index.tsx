import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import type { Player } from '@/types/play';

import ColoredIconButton, {
  ColoredIconButtonProps,
} from '@/components/button/ColoredIconButton';

import * as constants from '@/pages/play/lobby/constants';
import { EMPTY_PLAYER_COLOR } from '@/pages/play/lobby/constants';
import Character from '@/pages/play/lobby/Players/Character';
import PlayerInfo from '@/pages/play/lobby/Players/Info';

import { getReady } from '@/services/lobby';

interface Props {
  players: Player[];
}

const Players = ({ players }: Props) => {
  const navigate = useNavigate();
  const myCode = localStorage.getItem('userCode');
  const myInfo = players.find((player) => player.userCode === myCode);

  const buttonProps = ((player: Player | undefined): ColoredIconButtonProps => {
    if (!player) {
      navigate('/error/401');
      return {} as ColoredIconButtonProps;
    }
    const props = {
      icon: constants.PLAYER_ICON_LARGE[player.color],
      color: player.color,
      size: 'large' as const,
      onClick: getReady,
    };
    if (player.isMaster) {
      return {
        ...props,
        text: '게임시작',
      };
    }
    if (player.ready) {
      return {
        ...props,
        text: '준비취소',
        color: EMPTY_PLAYER_COLOR,
      };
    }
    return {
      ...props,
      text: '게임준비',
    };
  })(myInfo);

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
        <ColoredIconButton {...buttonProps} />
      </div>
    </div>
  );
};

export default Players;
