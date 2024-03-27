import type { RankInfo } from '@/types/rank';

import { api } from '@/services/index';

export const getRankList = async () => {
  return await api
    .get<RankInfo>(true, 'rank/list')
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};
