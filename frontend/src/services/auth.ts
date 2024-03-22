import type { LogInInfo, SignUpInfo, User } from '@/types/auth';

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

export const postMemberLogin = async (logInInfo: LogInInfo) => {
  try {
    const response = await api.post<User, LogInInfo>(
      false,
      `/user/login`,
      logInInfo,
    );
    if (response.status >= 200 && response.status < 300) {
      localStorage.setItem('token', response.data.token);
      return response.data;
    }
    console.log(response.data);
    return false;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getIdCheck = async (id: string) => {
  try {
    const response = await api.get<boolean>(false, `/user/${id}`);
    return response.data; // 중복이 안되면 false. true면 오류
  } catch (e) {
    console.log(e);
    return false; // null 보다는 예외 처리를 위해 false로 변경
  }
};

export const postGuestSignUp = async (signUpInfo: SignUpInfo) => {
  try {
    await api.post<User, SignUpInfo>(true, '/user/guest', signUpInfo);
  } catch (e) {
    console.log(e);
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
    console.log(e);
  }
};
