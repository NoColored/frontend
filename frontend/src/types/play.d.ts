export interface RoomRequest {
  roomTitle: string;
  roomPassword: string;
  mapId: number;
}

export interface RoomListInfo {
  roomTitle: string;
  roomCode: string;
  mapId: number;
  userNumber: number;
}

export interface RoomInfo {
  roomUuid: string;
  roomTitle: string;
  roomCodeString: string;
  roomPassword: string;
  masterIndex: number;
  mapId: number;
  readyState: boolean[];
  players: {
    userCode: string;
    nickName: string;
    tier: string;
    skin: string;
    title: string;
  }[];
}
