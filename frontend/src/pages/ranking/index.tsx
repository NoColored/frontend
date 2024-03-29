import { useLoaderData } from 'react-router-dom';

import * as styles from './index.css';

import type { Rank } from '@/types/rank';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

const Ranking = () => {
  const rankData = useLoaderData() as Rank;
  const rankList = rankData.players;
  const myRank = rankData.user;

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.rankingFullWrapper}>
        <div className={styles.rankingTitleWrapper}>
          <div className={styles.rankingTitleText}>RANKING</div>
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
