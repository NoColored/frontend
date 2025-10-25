import { useCollectionStale } from '@/models/collection';
import { useUserStale } from '@/models/user';

export const useDataStale = () => {
  const { setUserStale } = useUserStale();
  const { setCollectionStale } = useCollectionStale();

  return {
    setDataStale: () => {
      setUserStale();
      setCollectionStale();
    },
  };
};
