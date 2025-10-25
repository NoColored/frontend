interface Room {
  roomTitle: string;
  mapId: MapId;
  roomCode: string;
  roomPassword: string;
}

interface EnteredRoom extends Room {
  roomUuid: string;
  masterIndex: number;
  readyState: boolean[];
  players: Player[];
}
