import type { tierRange } from '@/pages/ranking/types';
import type { colorStyles } from '@/pages/result/types';

interface ResultPlayer {
  nickname: string;
  label: string;
  index: colorStyles;
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
