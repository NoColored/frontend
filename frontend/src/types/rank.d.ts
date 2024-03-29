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

// 일단 refreshTime 을 받고 있는데, 이건 나중에 디벨롭 할 때 다시 이야기.
export interface RankInfo {
  refreshTime: string;
  players: RankPlayer[];
}

export interface Rank {
  players: RankPlayer[];
  user: User;
}
