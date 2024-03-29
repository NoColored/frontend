import type { RankInfo } from '@/types/rank';

import { api } from '@/services/index';

export const getRankList = async () => {
  return api
    .get<RankInfo>(true, 'rank/list')
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};
