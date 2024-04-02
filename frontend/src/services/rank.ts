import type { RankInfo, RankPlayer } from '@/types/rank';

import { getUser } from '@/services/auth';
import { api } from '@/services/index';

const requestRankList = async () => {
  return (
    api
      .get<RankInfo>(true, 'rank/list')
      .then((res) => {
        console.log(res.data);
        return res.data.players;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(error);
        return [] as RankPlayer[];
      })
  );
};

export const getRank = async () => {
  const rankList = await requestRankList();
  const myRank = await getUser();

  return { rankList, myRank };
};
