import { NicknameInfo, PasswordInfo } from '@/types/auth';

import { api } from '@/features/api';

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
    return false;
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
    // console.log(response.data);
    return response.data;
  } catch (e) {
    return false;
  }
};

export const deleteUserInfo = async () => {
  await api
    .delete<string>(true, '/user')
    .then(() => {
      window.location.href = '/';
    })
    // eslint-disable-next-line
    .catch((e) => {
      console.log(e);
    });
};

export const checkToken = async () => {
  return api
    .get<boolean>(true, '/user/token')
    .then((response) => {
      const isTokenValid = response.data;
      if (!isTokenValid) {
        throw new Error();
      }
      return isTokenValid;
    })
    .catch((err) => {
      localStorage.removeItem('token');
      throw err;
    });
};
