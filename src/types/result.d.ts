import type { tierRange } from '@/pages/ranking/types';

interface ResultPlayer {
  nickname: string;
  label: string;
  index: number;
  skin: string;
  rank: number;
  score: number;
  userCode: string;
}

interface TierReward {
  oldtier: tierRange;
  newtier: tierRange;
  upgrade: boolean;
}

export interface GameResult {
  roomUuid?: string;
  players: ResultPlayer[];
  reward: {
    tier?: TierReward;
    skins: string[];
  };
}
