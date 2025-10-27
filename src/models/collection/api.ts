import { COLLECTION_KEY } from './constants';

import { api, queryClient } from '@/shared/api';

export const getCollection = async () => {
  return api.get<Collections>('/collection').then((response) => {
    const { data } = response;
    console.debug(data);
    return data;
  });
};

export const refetchCollection = () =>
  queryClient.invalidateQueries({
    queryKey: [COLLECTION_KEY],
  });
