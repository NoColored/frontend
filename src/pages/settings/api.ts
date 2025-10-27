import { api } from '@/shared/api';

export const patchNicknameChange = async (nickname: string) => {
  try {
    await api.patch<string>('/user/nickname', { nickname });
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
    await api.patch<string>('/user/password', {
      prePassword,
      newPassword,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const postConfirmPassword = async (password: string) => {
  try {
    const response = await api.post<boolean>('/user/confirm', { password });
    // console.log(response.data);
    return response.data;
  } catch (e) {
    return false;
  }
};

export const deleteUserInfo = async () => {
  await api
    .delete<string>('/user')
    .then(() => {
      window.location.href = '/';
    })
    // eslint-disable-next-line
    .catch((e) => {
      console.log(e);
    });
};
