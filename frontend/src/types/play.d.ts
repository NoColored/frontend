interface Player {
  userCode: string;
  nickName: string;
  tier: string;
  skin: string;
  title: string;
}

interface Room {
  roomTitle?: string;
  mapId?: number;
}

export interface CreateRoom extends Room {
  roomPassword: string;
}

interface CodeRoom extends Room {
  roomCode: string;
  roomPassword?: string;
}

interface RoomListItem extends CodeRoom {
  userNumber: number;
}

interface Lobby extends CodeRoom {
  roomUuid: string;
  masterIndex: number;
  readyState: boolean[];
  players: Player[];
}
