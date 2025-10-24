import { useQuery } from '@tanstack/react-query';
import { getDefaultStore, useSetAtom } from 'jotai';

import { getCollection } from './api';
import { COLLECTION_KEY } from './constants';
import { collectionStaleAtom } from './store';

export const useCollection = () => {
  const store = getDefaultStore();
  const isStale = store.get(collectionStaleAtom);

  const { data } = useQuery({
    queryKey: [COLLECTION_KEY],
    queryFn: async () => {
      const collection = await getCollection();
      store.set(collectionStaleAtom, false);
      return collection;
    },
    refetchOnMount: isStale,
  });

  return { collection: data };
};

export const useCollectionStale = () => {
  const setStale = useSetAtom(collectionStaleAtom);

  return {
    setCollectionStale: () => setStale(true),
  };
};
