import * as styles from './index.css';

import type { User } from '@/types/auth';
import type { Player } from '@/types/rank';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';
import type { tierType } from '@/components/imagebox/types';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

import { getUser } from '@/services/auth';
import { getRankList } from '@/services/rank';

const Ranking = () => {
  const [rankList, setRankList] = useState<Player[]>([]);
  const [myRank, setMyRank] = useState<User>();
  const [refreshTime, setRefreshTime] = useState<Date>();

  const getRankingInfo = async () => {
    const rankData = await getRankList();
    if (rankData) {
      setRefreshTime(new Date(rankData.refreshTime));
      setRankList(rankData.players);
    } else {
      console.log(refreshTime);
      console.log('랭킹 정보를 불러오는 데 실패했습니다.');
    }
  };

  const getMyRank = async () => {
    const myData = await getUser();
    if (myData && !myData.guest) {
      setMyRank(myData);
    } else {
      console.log(
        '나의 랭킹 정보를 불러오는 데 실패했습니다. 회원 로그인 했는지 체크해주세요.',
      );
    }
  };

  useEffect(() => {
    getRankingInfo();
    getMyRank();

    const now = new Date();

    if (refreshTime) {
      const timeout = refreshTime.getTime() - now.getTime();
      const timer = setTimeout(() => {
        getRankingInfo();
      }, timeout);

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
            <RankingItemBox
              key={item.rank}
              rank={item.rank}
              imgSrc={item.skin}
              label={item.label}
              nickname={item.nickname}
              tier={item.tier as tierType}
              score={item.rating}
            />
          ))}
        </div>
        {myRank && (
          <RankingItemBox
            rank={myRank.guest ? myRank.rank : '?????'}
            imgSrc={myRank.skin}
            label={myRank.label}
            nickname={myRank.nickname}
            tier={myRank.tier as tierType}
            score={myRank.rating}
            myRank
          />
        )}
      </div>
    </BasicContentFrame>
  );
};

export default Ranking;
