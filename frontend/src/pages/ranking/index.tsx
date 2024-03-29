import { useEffect, useState } from 'react';

import * as styles from './index.css';

import type { User } from '@/types/auth';
import type { RankPlayer } from '@/types/rank';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

import { getUser } from '@/services/auth';
import { getRankList } from '@/services/rank';

const Ranking = () => {
  const [rankList, setRankList] = useState<RankPlayer[]>([]);
  const [myRank, setMyRank] = useState<User>();
  // const [refreshTime, setRefreshTime] = useState<Date>();

  const getMyRank = async () => {
    const myData = await getUser();
    if (myData) {
      setMyRank(myData);
    }
  };

  const getRanking = async () => {
    const data = await getRankList();
    if (typeof data !== 'string') {
      setRankList(data.players);
      // setRefreshTime(new Date(data.refreshTime));
    }
    console.log(rankList);
  };

  // refreshTime에 대해 백엔드 측에서 원만하게 해결이 된다면 okay, 수정할 필요는 없음.
  // 기본 delay 시간은 5분으로 설정함.
  // 일단, 랭킹 페이지 들어올 때만 갱신할 수 있도록 설정해놓음.
  useEffect(() => {
    getMyRank();
    getRanking();

    // if (refreshTime) {
    //   const currentTime = new Date().getTime();
    //   let delay = refreshTime.getTime() - currentTime;
    //   delay = delay > 0 ? delay : 5 * 60 * 1000;
    //
    //   const timer = setTimeout(() => {
    //     getMyRank();
    //     getRanking();
    //   }, delay);
    //   return () => clearTimeout(timer);
    // }
  }, []);

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
