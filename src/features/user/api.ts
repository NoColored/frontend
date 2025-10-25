import { client } from '@/shared/api';

export const getUser = async () => {
  return client.get<User>(`/user`).then((response) => {
    const { data } = response;
    console.debug('user:', data);
    return data;
  });
};

const setToken = (token: string, status: number) => {
  if (status === 200) {
    localStorage.setItem('token', token);
    return true;
  }
  return false;
};

export const loginAsMember = async (account: Account) => {
  const { data, status } = await client.post<string>(`/user/login`, account, {
    headers: {
      'X-Bypass-Authorization': true,
    },
  });
  return setToken(data, status);
};

export const loginAsGuest = async () => {
  return client
    .get<string>('/user/guest', {
      headers: {
        'X-Bypass-Authorization': true,
      },
    })
    .then(({ data, status }) => setToken(data, status))
    .catch(() => false);
};
