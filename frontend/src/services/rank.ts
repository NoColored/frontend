import type { RankInfo } from '@/types/rank';

import { api } from '@/services/index';

export const getRankList = async () => {
  try {
    const response = await api.get<RankInfo>(true, 'rank/list');
    // refreshTime 설정
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
