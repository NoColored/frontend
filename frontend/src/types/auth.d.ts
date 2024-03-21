export interface User {
  exp: number;
  guest: boolean;
  level: number;
  nickName: string;
  rating: number;
  skin: string;
  tier: string;
  title: string;
  token: string;
  userCode: string;
}

export interface SignUpInfo {
  id: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}
