import type { tierRange } from '@/pages/ranking/types';

interface ResultPlayer {
  nickname: string;
  label: string;
  index: number;
  skin: string;
  rank: number;
  step: number;
}

interface TierReward {
  oldtier: tierRange;
  newtier: tierRange;
  upgrade: boolean;
}

export interface GameResult {
  players: ResultPlayer[];
  reward: {
    tier?: TierReward;
    skin?: string[];
  };
}
