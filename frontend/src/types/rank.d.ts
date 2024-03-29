import type { User } from '@/types/auth';

import type { tierRange } from '@/pages/ranking/types';

export interface RankPlayer {
  rank: number;
  nickname: string;
  skin: string;
  label: string;
  rating: number;
  tier: tierRange;
}

export interface RankInfo {
  refreshTime: string;
  players: RankPlayer[];
}

export interface Rank {
  players: RankPlayer[];
  user: User;
}
