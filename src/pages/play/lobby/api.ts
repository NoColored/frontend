import { client } from '@/shared/api';

export const getLobbyInfo = async (roodId: string | undefined) => {
  if (!roodId) {
    return { masterIndex: -1 } as EnteredRoom;
  }

  return client
    .get<EnteredRoom>(`/play/friendly/lobby/${roodId}`)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
      return { masterIndex: -1 } as EnteredRoom;
    });
};

export const getReady = async () => {
  return client.get<string>('/play/friendly/ready');
};
