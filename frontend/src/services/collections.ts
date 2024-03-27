import { api } from '@/services/index';
import { Collections } from '@/types/collections';

export const getCollections = async (): Promise<Collections | void> => {
  return await api
    .get<Collections>(true, '/collection')
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
