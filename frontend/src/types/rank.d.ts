import type { User } from '@/types/auth';

export interface RankInfo {
  refreshTime: string;
  players: User[];
}
