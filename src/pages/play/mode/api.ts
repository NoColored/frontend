import { api } from '@/shared/api';

export const getMatching = async () => {
  return api
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
  return api
    .delete<string>('/play/ranking')
    .then((response) => {
      return response.status === 200;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
