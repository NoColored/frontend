import type { User } from '@/types/auth';

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
