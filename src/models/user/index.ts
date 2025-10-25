import { queryKey } from './constants';

import { queryClient } from '@/shared/api';

export * from './hooks';

export const removeUserQuery = () => queryClient.removeQueries({ queryKey });
