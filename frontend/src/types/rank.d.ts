export interface Player {
  rank: string;
  nickname: string;
  skin: string;
  label: string;
  rating: number;
  tier: string;
}

export interface RankInfo {
  refreshTime: string;
  players: Player[];
}
