import { client } from '@/shared/api';

export const leaveRoom = async () => {
  return client
    .get('/play/friendly/out')
    .then(({ data }) => {
      console.debug('leave room:', data);
    })
    .catch((err) => {
      console.debug(err);
    });
};
