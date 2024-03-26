import {
  LogInInfo,
  NicknameInfo,
  PasswordInfo,
  SignUpInfo,
  User,
} from '@/types/auth';

import { api } from '@/services/index';
import { useUserStateStore } from '@/states/user';
import { redirect } from 'react-router-dom';

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
    if (response.status === 401) {
      redirect('/error/401');
      return false;
    }
    console.log(response.data);
    return false;
  } catch (e) {
    console.log(e);
    return false;
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
    const response = await api.get<boolean>(false, `/user/dup/${id}`);
    return response.data; // 중복이 안되면 false. true면 오류
  } catch (e) {
    return false;
  }
};

export const postGuestSignUp = async (signUpInfo: SignUpInfo) => {
  await api
    .post<string, SignUpInfo>(true, '/user/guest', signUpInfo)
    .then(() => {
      useUserStateStore.getState().setMember(); // 회원 상태로 변경
    })
    .catch((error) => {
      console.log(error);
    });
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
    const changeNickname: NicknameInfo = {
      nickname,
    };
    await api.patch<string, NicknameInfo>(
      true,
      '/user/nickname',
      changeNickname,
    );
    return true;
  } catch (e) {
    console.log(e);
  }
};

export const patchPasswordChange = async (
  prePassword: string,
  newPassword: string,
) => {
  try {
    const changePassword: PasswordInfo = {
      prePassword,
      newPassword,
    };

    await api.patch<string, PasswordInfo>(
      true,
      '/user/password',
      changePassword,
    );
    return true;
  } catch (e) {
    return false;
  }
};

export const postConfirmPassword = async (password: string) => {
  try {
    const response = await api.post<boolean, { password: string }>(
      true,
      '/user/confirm',
      { password },
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUserInfo = async () => {
  await api
    .delete<string>(true, '/user')
    .then(() => {
      window.location.href = '/';
    })
    .catch((e) => {
      console.log(e);
    });
};
