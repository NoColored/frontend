import type { RankInfo } from '@/types/rank';

import { api } from '@/features/api';

const requestRankList = async () => {
  return api.get<RankInfo>(true, 'rank/list').then((res) => {
    return res.data.players;
  });
};

export const getRank = async () => {
  const rankList = await requestRankList();

  return { rankList };
};
