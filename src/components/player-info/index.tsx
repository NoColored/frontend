import * as styles from './index.css';
import TextBox from './text-box';

import RoundCornerImageBox from '@/components/image-box';

interface Props {
  label: string;
  nickname: string;
  imgSrc: string;
}

const PlayerInfo = ({ label, nickname, imgSrc }: Props) => {
  return (
    <div className={styles.playerInfoWrapper}>
      <div className={styles.imageWrapper}>
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

export default PlayerInfo;
