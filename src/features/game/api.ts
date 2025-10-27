import { api } from '@/shared/api';

export const getGameReady = async () => {
  return api
    .get<GameData>('/ingame/ready')
    .then(({ data }) => data)
    .catch(() => null);
};
