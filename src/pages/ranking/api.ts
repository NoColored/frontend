import { api } from '@/shared/api';

export const getRank = async () => {
  return api
    .get<{
      refreshTime: string;
      players: Profile[];
    }>('rank/list')
    .then(({ data }) => {
      console.debug('rank:', data);
      return data.players;
    });
};
