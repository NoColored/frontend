interface Player {
  userCode: string;
  nickname: string;
  tier: tierRange;
  skin: string;
  label: string;
  ready: boolean;
  isMaster: boolean;
  color: playerColorType;
  key: string;
}

interface Room {
  roomTitle: string;
  mapId: MapId;
  roomCode: string;
  roomPassword: string;
}

type CreateRoom = Omit<Room, 'roomCode'>;

interface RoomListItem extends Room {
  userNumber: number;
}

interface Lobby extends Room {
  roomUuid: string;
  masterIndex: number;
  readyState: boolean[];
  players: Player[];
}

interface RequestEnterRoom {
  roomCode: string;
  roomPassword: string;
}
