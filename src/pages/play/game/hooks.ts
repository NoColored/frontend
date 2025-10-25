import { useUserStale } from '@/features/user';
import { useCollectionStale } from '@/models/collection';

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
