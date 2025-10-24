export interface SignUpInfo {
  id: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export interface NicknameInfo {
  nickname: string;
}

export interface PasswordInfo {
  prePassword: string;
  newPassword: string;
}
