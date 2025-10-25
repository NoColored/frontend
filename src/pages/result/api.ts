import { client } from '@/shared/api';

export const getGameResult = async () => {
  return client.get<GameResult>('/ingame').then(({ data }) => data);
};
