import { client } from '@/features/api';

export const getCollections = async () => {
  return client.get<Collections>('/collection').then((response) => {
    const { data } = response;
    console.debug(data);
    return data;
  });
};
