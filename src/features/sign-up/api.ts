import type { AxiosError } from 'axios';

import { invalidateUserQuery } from '@/models/user';
import { client } from '@/shared/api';

const axiosConfig = {
  headers: {
    'X-Bypass-Authorization': true,
  },
};

export const checkIdDuplicate = async (id: SignUpForm['id']) => {
  // 중복이 안되면 false. true면 오류
  return client
    .get<boolean>(`/user/dup/${id}`, axiosConfig)
    .then(({ data }) => data)
    .catch(() => true);
};

export const upgradeToMember = async (formData: SignUpForm) => {
  return client
    .post<string>('/user/guest', formData)
    .then(({ data }) => {
      console.debug(data);
      invalidateUserQuery();
      return true;
    })
    .catch(({ response }: AxiosError) => {
      console.debug(response);
      return false;
    });
};

export const registerMember = async (formData: SignUpForm) => {
  return client
    .post<string>('/user/signup', formData, axiosConfig)
    .then(({ data, status }) => {
      localStorage.setItem('token', data);
      return status === 200;
    })
    .catch(() => false);
};
