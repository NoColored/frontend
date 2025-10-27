import { queryKey } from './constants';

import { queryClient } from '@/shared/api';

export const invalidateUserQuery = () =>
  queryClient.invalidateQueries({ queryKey });
