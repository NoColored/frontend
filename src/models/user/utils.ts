import { queryKey } from './constants';

import { queryClient } from '@/shared/api';

export const removeUserQuery = () => queryClient.removeQueries({ queryKey });

export const invalidateUserQuery = () =>
  queryClient.invalidateQueries({ queryKey });
