import type { LogInInfo, SignUpInfo, User } from '@/types/auth';

import { api } from '@/services/index';

export const getGuestLogin = async () => {
  try {
    const response = await api.get<string>(false, '/user/guest');
    localStorage.setItem('token', response.data);
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const postMemberLogin = async (logInInfo: LogInInfo) => {
  try {
    const response = await api.post<string, LogInInfo>(
      false,
      `/user/login`,
      logInInfo,
    );
    if (response.status === 200) {
      localStorage.setItem('token', response.data);
      return true;
    }
    console.log(response.data);
    return false;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getUser = async () => {
  try {
    const response = await api.get<User>(true, `/user`);
    return response.data;
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
    return false; // null 보다는 예외 처리를 위해 false로 변경
  }
};

export const postGuestSignUp = async (signUpInfo: SignUpInfo) => {
  try {
    const response = await api.post<string, SignUpInfo>(
      true,
      '/user/guest',
      signUpInfo,
    );
    return response.data;
  } catch (e) {
    return false;
  }
};

export const postSignUp = async (signUpInfo: SignUpInfo) => {
  try {
    await api.post<string, SignUpInfo>(false, '/user/signup', signUpInfo);
    return true;
  } catch (e) {
    return false;
  }
};

export const patchNicknameChange = async (nickname: string) => {
  try {
    const response = await api.patch<boolean, string>(
      true,
      '/user/nickname',
      nickname,
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
