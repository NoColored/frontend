import type { GameResult } from '@/types/result';

import { api } from '@/services/index';

export const getGameResult = async () => {
  return api.get<GameResult>(true, '/ingame').then((res) => {
    return res.data;
  });
};
