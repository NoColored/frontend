export interface User {
  exp: number;
  expRequire: number;
  guest: boolean;
  level: number;
  nickname: string;
  rating: number;
  skin: string;
  tier: string;
  title: string;
  token: string;
  userCode: string;
}

export interface LogInInfo {
  id: string;
  password: string;
}

export interface SignUpInfo {
  id: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}
