import { authResponse } from '@/types/auth';

import { api } from '@/services/index';

export const getGuestLogin = async () => {
  try {
    return await api.get<authResponse>(false, '/user/guest');
  } catch (e) {
    console.log(e);
  }
};
