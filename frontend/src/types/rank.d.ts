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
