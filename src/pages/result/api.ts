import { client } from '@/features/api';

export const getGameResult = async () => {
  return client.get<GameResult>('/ingame').then(({ data }) => data);
};
