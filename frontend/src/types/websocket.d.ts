import type { Lobby } from '@/types/play';

interface ActionDataTypeMap {
  // auth
  authorization: null;
  invalidToken: null;
  loginFailed: null;

  // matching
  matching: string;
  matchingCancel: null;

  roomInfo: Lobby;
}

type actionType = keyof ActionDataTypeMap;

interface WebSocketMessage<T extends actionType> {
  action: T;
  data: ActionDataTypeMap[T];
}
