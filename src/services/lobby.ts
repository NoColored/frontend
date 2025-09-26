import type { CreateRoom, Lobby } from '@/types/play';

import { api } from '@/services/index';

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

export const updateRoom = async (room: CreateRoom) => {
  return (
    api
      .post<string, CreateRoom>(true, '/play/friendly/renew', room)
      .then(() => {
        // console.log('방 정보 수정 요청 성공');
        return '';
      })
      // eslint-disable-next-line
      .catch((err) => {
        console.log(err);
        return '';
      })
  );
};
