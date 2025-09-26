import { useLoaderData } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import type { User } from '@/types/auth';
import type { RankPlayer } from '@/types/rank';

import BasicContentFrame from '@/components/frame/with-buttons/index';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

const Ranking = () => {
  const { rankList, myRank } = useLoaderData() as {
    rankList: RankPlayer[];
    myRank: User;
  };

  return (
    <BasicContentFrame leftButton={{ label: '뒤로' }}>
      <div className={styles.rankingFullWrapper}>
        <div className={styles.rankingTitleWrapper}>
          <div className={styles.rankingTitleText}>
            {constants.RANKING_TITLE}
          </div>
          {myRank.guest && (
            <div className={styles.guestText}>{constants.GUEST_TEXT}</div>
          )}
        </div>
        <div className={styles.rankingWrapper}>
          {rankList.map((item) => (
            <RankingItemBox key={item.rank} player={item} />
          ))}
        </div>
        {myRank && (
          <div className={styles.myRankingWrapper}>
            <RankingItemBox player={myRank} guest={myRank.guest} myRank />
          </div>
        )}
      </div>
    </BasicContentFrame>
  );
};

export default Ranking;
