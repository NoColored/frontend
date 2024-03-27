import type { tierRange } from '@/pages/ranking/types';

export interface User {
  exp: number;
  expRequire: number;
  guest: boolean;
  level: number;
  nickname: string;
  rating: number;
  skin: string;
  tier: tierRange;
  label: string;
  rank: number;
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

export interface NicknameInfo {
  nickname: string;
}

export interface PasswordInfo {
  prePassword: string;
  newPassword: string;
}
