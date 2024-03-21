import * as constants from './constants';
import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredIconButton from '@/components/button/ColoredIconButton';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

const Mode = () => {
  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.wrapper}>
        <ColoredIconButton
          icon={constants.FRIENDLY.icon}
          size='xlarge'
          text={constants.FRIENDLY.label}
          color={constants.FRIENDLY.color}
          onClick={() => {}}
        />
        <ColoredIconButton
          icon={constants.RANKING.icon}
          size='xlarge'
          text={constants.RANKING.label}
          color={constants.RANKING.color}
          onClick={() => {}}
        />
        <div className={styles.myRank}>
          <RankingItemBox
            rank={10000}
            imgSrc='/images/character/default-magichat/character-default-magichat-blue-h240w240.png'
            label='내칭호가들어가는데요'
            nickname='수원왕갈비통닭임'
            tier='origin'
            score={129}
            myRank
          />
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Mode;
