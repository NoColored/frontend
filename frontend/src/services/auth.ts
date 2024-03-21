import { user } from '@/types/auth';

import { api } from '@/services/index';

export const getGuestLogin = async () => {
  try {
    const response = await api.get<user>(false, '/user/guest');
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
