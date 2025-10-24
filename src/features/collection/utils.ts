import { COLLECTION_KEY } from './constants';

import { queryClient } from '@/features/api';

export const refetchCollection = () =>
  queryClient.invalidateQueries({
    queryKey: [COLLECTION_KEY],
  });
