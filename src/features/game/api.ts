import { client } from '@/features/api';

export const getGameReady = async () => {
  return client
    .get<GameData>('/ingame/ready')
    .then(({ data }) => data)
    .catch(() => null);
};
