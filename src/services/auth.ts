import { NicknameInfo, PasswordInfo, SignUpInfo } from '@/types/auth';

import { api } from '@/features/api';

export const getIdCheck = async (id: string) => {
  try {
    const response = await api.get<boolean>(false, `/user/dup/${id}`);
    return response.data; // 중복이 안되면 false. true면 오류
  } catch (e) {
    return false;
  }
};

export const postGuestSignUp = async (signUpInfo: SignUpInfo) => {
  return (
    api
      .post<string, SignUpInfo>(true, '/user/guest', signUpInfo)
      .then(() => {
        return true;
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(error);
        return false;
      })
  );
};

export const postSignUp = async (signUpInfo: SignUpInfo) => {
  return api
    .post<string, SignUpInfo>(false, '/user/signup', signUpInfo)
    .then((res) => {
      localStorage.setItem('token', res.data);
      return true;
    })
    .catch(() => false);
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
