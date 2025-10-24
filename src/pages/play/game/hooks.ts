import { useCollectionStale } from '@/features/collection';
import { useUserStale } from '@/features/user';

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
