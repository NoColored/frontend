import * as styles from './index.css';
import TextBox from './text-box';

import RoundCornerImageBox from '@/components/image-box';
import type { PlayerInfoBoxProps } from '@/components/PlayerInfoBox/types';

const PlayerInfoBox = ({ label, nickname, imgSrc }: PlayerInfoBoxProps) => {
  return (
    <div className={styles.playerInfoWrapper}>
      <div className={styles.imageboxWrapper}>
        <RoundCornerImageBox
          size='small'
          imgSrc={imgSrc}
          backgroundColor='white'
        />
      </div>
      <TextBox primaryText={nickname} secondaryText={label} />
    </div>
  );
};

export default PlayerInfoBox;
