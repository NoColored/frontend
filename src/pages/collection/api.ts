import { client } from '@/features/api';

export const getCollections = async () => {
  return client.get<Collections>('/collection').then((response) => {
    const { data } = response;
    console.debug(data);
    return data;
  });
};

export const updateSkin = async (skinId: number) => {
  return client
    .patch<string>('/collection/skin', { skinId })
    .then((response) => {
      const { data } = response;
      console.debug(data);
      return data;
    });
};

export const updateLabel = async (labelId: number) => {
  return client
    .patch<string>('/collection/label', {
      labelId,
    })
    .then((response) => {
      const { data } = response;
      console.debug(data);
      return data;
    });
};
