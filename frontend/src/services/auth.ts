import type { SignUpInfo, User } from '@/types/auth';

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

export const getIdCheck = async (id: string) => {
  try {
    const response = await api.get<boolean>(false, `/user/${id}`);
    console.log(response.data);
    return response.data; // True / False 인지 확인
  } catch (e) {
    console.log(e);
    return false; // null 보다는 예외 처리를 위해 false로 변경
  }
};

export const postGuestSignUp = async (signUpInfo: SignUpInfo) => {
  try {
    await api.post<User, SignUpInfo>(false, '/user/guest', signUpInfo);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const postSignUp = async (signUpInfo: SignUpInfo) => {
  try {
    const tf = await api.post<User, SignUpInfo>(
      false,
      '/user/signup',
      signUpInfo,
    );
    console.log(tf);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
