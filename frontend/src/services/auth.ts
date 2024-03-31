import {
  LogInInfo,
  NicknameInfo,
  PasswordInfo,
  SignUpInfo,
  User,
} from '@/types/auth';

import { api } from '@/services/index';

import { useUserStateStore } from '@/states/user';

export const getGuestLogin = async () => {
  return api
    .get<string>(false, '/user/guest')
    .then((response) => {
      localStorage.setItem('token', response.data);
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const postMemberLogin = async (logInInfo: LogInInfo) => {
  return api
    .post<string, LogInInfo>(false, `/user/login`, logInInfo)
    .then((response) => {
      localStorage.setItem('token', response.data);
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const getUser = async () => {
  return api
    .get<User>(true, `/user`)
    .then((response) => {
      const user = response.data;
      const { setIsGuest, setUserCode } = useUserStateStore.getState();
      setIsGuest(user.guest);
      setUserCode(user.userCode);
      return user;
    })
    .catch((e) => {
      console.log(e);
      return { userCode: '' } as User;
    });
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
  return api
    .post<string, SignUpInfo>(true, '/user/guest', signUpInfo)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
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
    console.log(response.data);
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
    .catch((e) => {
      console.log(e);
    });
};
