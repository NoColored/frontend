import * as styles from './index.css';

import ColoredIconButton from '@/components/button/ColoredIconButton';

import * as constants from '@/pages/play/lobby/constants';
import Character from '@/pages/play/lobby/Players/Character';
import PlayerInfo from '@/pages/play/lobby/Players/Info';

const Players = () => {
  const playButtonLabel = '게임시작';
  const playerColor = 'pink';
  return (
    <div className={styles.playerWrapper}>
      <div className={styles.characterWrapper}>
        {constants.PLAYER_COLORS.map((color) => (
          <Character color={color} key={color} />
        ))}
      </div>
      <div className={styles.infoAndButtonWrapper}>
        <div className={styles.playerInfoWrapper}>
          {constants.PLAYER_COLORS.map((color) => (
            <PlayerInfo color={color} key={color} />
          ))}
        </div>
        <ColoredIconButton
          icon={constants.PLAYER_ICON_LARGE[playerColor]}
          size='large'
          text={playButtonLabel}
          color={playerColor}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Players;
