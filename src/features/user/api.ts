import { client } from '@/features/api';

export const getUser = async () => {
  return client.get<User>(`/user`).then((response) => {
    const { data } = response;
    console.debug('user:', data);
    return data;
  });
};
