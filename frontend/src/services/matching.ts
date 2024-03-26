import { api } from '@/services/index';

export const getMatching = async () => {
  const response = await api.get<string>(true, '/play/ranking');
  return response.status === 200;
};

export const deleteMatching = async () => {
  const response = await api.delete<string>(true, '/play/ranking');
  return response.status === 200;
};
