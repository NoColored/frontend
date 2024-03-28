import { useEffect, useState } from 'react';

import * as styles from './index.css';

import type { User } from '@/types/auth';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

import { getUser } from '@/services/auth';
import { getRankList } from '@/services/rank';

const Ranking = () => {
  const [rankList, setRankList] = useState<User[]>([]);
  const [myRank, setMyRank] = useState<User>();
  const [refreshTime, setRefreshTime] = useState<Date>();

  const getRankingInfo = async () => {
    const rankData = await getRankList();
    if (typeof rankData !== 'string') {
      setRefreshTime(new Date(rankData.refreshTime));
      setRankList(rankData.players || []);
    }
  };

  const getMyRank = async () => {
    const myData = await getUser();
    if (myData) {
      setMyRank(myData);
    }
  };

  // refreshTime에 대해 백엔드 측에서 원만하게 해결이 된다면 okay, 수정할 필요는 없음.
  // 기본 delay 시간은 5분으로 설정함.
  useEffect(() => {
    getRankingInfo();
    getMyRank();
    console.log(rankList);

    if (refreshTime) {
      const currentTime = new Date().getTime();
      let delay = refreshTime.getTime() - currentTime;
      delay = delay > 0 ? delay : 5 * 60 * 1000;

      const timer = setTimeout(() => {
        getRankingInfo();
        getMyRank();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.rankingFullWrapper}>
        <div className={styles.rankingTitleWrapper}>
          <div className={styles.rankingTitleText}>RANKING</div>
        </div>

        <div className={styles.rankingWrapper}>
          {rankList.map((item) => (
            <RankingItemBox key={item.rank} user={item} />
          ))}
        </div>
        {myRank && (
          <div className={styles.myRankingWrapper}>
            <RankingItemBox user={myRank} myRank />
          </div>
        )}
      </div>
    </BasicContentFrame>
  );
};

export default Ranking;
