import { api } from '@/shared/api';

export const updateSkin = async (skinId: number) => {
  return api.patch<string>('/collection/skin', { skinId }).then((response) => {
    const { data } = response;
    console.debug(data);
    return data;
  });
};

export const updateLabel = async (labelId: number) => {
  return api
    .patch<string>('/collection/label', {
      labelId,
    })
    .then((response) => {
      const { data } = response;
      console.debug(data);
      return data;
    });
};
