import type { RankInfo } from '@/types/rank';

import { getUser } from '@/services/auth';
import { api } from '@/services/index';

const requestRankList = async () => {
  return api
    .get<RankInfo>(true, 'rank/list')
    .then((res) => {
      console.log(res.data);
      return res.data.players;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};

export const getRank = async () => {
  try {
    const ranking = await requestRankList();
    const myRank = await getUser();

    const rankingList = { players: ranking, user: myRank };

    return rankingList;
  } catch (error) {
    console.log(error);
    return '';
  }
};
