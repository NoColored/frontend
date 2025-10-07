import * as styles from './index.css';

import RoundCornerImageBox from '@/components/image-box';
import type { PlayerInfoBoxProps } from '@/components/PlayerInfoBox/types';
import LabeledTextBox from '@/components/textbox/LabeledTextBox';

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
      <LabeledTextBox contentText={nickname} labelText={label} />
    </div>
  );
};

export default PlayerInfoBox;
