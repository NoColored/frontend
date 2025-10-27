import { api } from '@/shared/api';

export const leaveRoom = async () => {
  return api
    .get('/play/friendly/out')
    .then(({ data }) => {
      console.debug('leave room:', data);
    })
    .catch((err) => {
      console.debug(err);
    });
};
