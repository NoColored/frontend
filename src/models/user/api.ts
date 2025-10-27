import { api } from '@/shared/api';

export const getUser = async () => {
  return api.get<User>(`/user`).then((response) => {
    const { data } = response;
    console.debug('user:', data);
    return data;
  });
};
