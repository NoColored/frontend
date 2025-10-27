import { api } from '@/shared/api';

export const getGameResult = async () => {
  return api.get<GameResult>('/ingame').then(({ data }) => data);
};
