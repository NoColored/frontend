import { client } from '@/features/api';

export const getUser = async () => {
  return client.get<User>(`/user`).then((response) => {
    const { data } = response;
    console.debug('user:', data);
    return data;
  });
};

export const loginMember = async (account: Account) => {
  const { data, status } = await client.post<string>(`/user/login`, account, {
    headers: {
      'X-Bypass-Authorization': true,
    },
  });
  if (status === 200) {
    localStorage.setItem('token', data);
    return true;
  }
  return false;
};
