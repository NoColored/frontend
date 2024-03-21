import type { User } from '@/types/auth';

import { api } from '@/services/index';

export const getGuestLogin = async () => {
  try {
    const response = await api.get<User>(false, '/user/guest');
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
