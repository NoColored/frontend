interface Room {
  roomTitle: string;
  mapId: MapId;
  roomCode: string;
  roomPassword: string;
}

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
