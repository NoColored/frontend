import { client } from '@/shared/api';

export const getMatching = async () => {
  return client
    .get<string>('/play/ranking')
    .then((response) => {
      return response.status === 200;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};

export const deleteMatching = async () => {
  return client
    .delete<string>('/play/ranking')
    .then((response) => {
      return response.status === 200;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
