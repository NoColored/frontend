import { useQuery } from '@tanstack/react-query';

import { getCollections } from './api';
import { COLLECTION_KEY } from './constants';

export const useCollection = () => {
  const { data } = useQuery({
    queryKey: [COLLECTION_KEY],
    queryFn: getCollections,
    staleTime: 1000 * 90,
  });

  return { collection: data };
};
