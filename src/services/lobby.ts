import { api } from '@/features/api';

export const getLobbyInfo = async (roodId: string | undefined) => {
  if (!roodId) return { masterIndex: -1 } as Lobby;
  return (
    api
      .get<Lobby>(true, `/play/friendly/lobby/${roodId}`)
      .then((res) => res.data)
      // eslint-disable-next-line
      .catch((err) => {
        console.log(err);
        return { masterIndex: -1 } as Lobby;
      })
  );
};

export const getReady = async () => {
  return api.get<string>(true, '/play/friendly/ready');
};

export const getOut = async () => {
  return (
    api
      .get<string>(true, '/play/friendly/out')
      .then((res) => {
        console.debug('방 나가기 요청 성공', res.data);
      })
      // eslint-disable-next-line
      .catch((err) => {
        console.log(err);
      })
  );
};
