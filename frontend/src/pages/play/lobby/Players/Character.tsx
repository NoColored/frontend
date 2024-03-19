import * as styles from './index.css';

import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import * as constants from '@/pages/play/lobby/constants';
import type { playerColorType } from '@/pages/play/lobby/types';

interface Props {
  color: playerColorType;
}

const Character = ({ color }: Props) => {
  const label = 'READY';
  return (
    <div className={styles.character({ color })}>
      <RoundCornerImageBox
        size='full'
        imgSrc='/src/assets/character/default-none/character-default-none-blue-h240w240.png'
        backgroundColor='white'
      >
        <ColoredTextBox
          size='medium'
          color={color}
          text={label}
          icon={constants.PLAYER_ICON[color]}
        />
      </RoundCornerImageBox>
    </div>
  );
};

export default Character;
