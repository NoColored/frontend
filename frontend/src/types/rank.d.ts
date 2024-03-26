interface Player {
  rank: number;
  userCode: string;
  userNickname: string;
  userSkinId: string;
  userTitle: number;
}

export interface RankInfo {
  refreshTime: string;
  players: Player[];
}
