import { Collections } from '@/types/collections';

import { api } from '@/services/index';

export const getCollections = async (): Promise<Collections | void> => {
  return (
    api
      .get<Collections>(true, '/collection')
      .then((response) => {
        return response.data;
      })
      // eslint-disable-next-line
      .catch((err) => {
        console.log(err);
      })
  );
};

export const patchSkinChange = async (skinId: number) => {
  return (
    api
      .patch<string, { skinId: number }>(true, '/collection/skin', { skinId })
      .then((res) => {
        return res.data;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(error);
        return false;
      })
  );
};

export const patchLabelChange = async (labelId: number) => {
  return (
    api
      .patch<string, { labelId: number }>(true, '/collection/label', {
        labelId,
      })
      .then((res) => {
        return res.data;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(error);
        return false;
      })
  );
};
