import { api } from '@/shared/api';

const setToken = (token: string, status: number) => {
  if (status === 200) {
    localStorage.setItem('token', token);
    return true;
  }
  return false;
};

const axiosConfig = {
  headers: {
    'X-Bypass-Authorization': true,
  },
};

export const loginAsMember = async (account: Account) => {
  const { data, status } = await api.post<string>(
    `/user/login`,
    account,
    axiosConfig,
  );
  return setToken(data, status);
};

export const loginAsGuest = async () => {
  return api
    .get<string>('/user/guest', axiosConfig)
    .then(({ data, status }) => setToken(data, status))
    .catch(() => false);
};

export const checkToken = async () => {
  const isTokenValid = await api
    .get<boolean>('/user/token')
    .then(({ data }) => data);

  if (!isTokenValid) {
    localStorage.removeItem('token');
    throw new Error();
  }

  return isTokenValid;
};
