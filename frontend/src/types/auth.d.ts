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

export interface RoomInfo {
  roomTitle: string;
  roomCode: string;
  roomPassword: string;
  masterIndex?: number;
  mapId: number;
  userNumber?: number;
}

export interface PlayerInfo {
  userIndex: number;
  player?: User;
  isReady: boolean;
}

export interface RankInfo {
  refreshTime: string;
  player: {
    rank: number;
    userCode: string;
    userNickname: string;
    userSkinId: string;
    userTitle: number;
  }[];
}
