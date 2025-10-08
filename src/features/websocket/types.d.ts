import type { Lobby } from '@/types/play';

interface ActionDataTypeMap {
  // auth
  authorization: null;
  invalidToken: null;
  loginFailed: null;

  // 경쟁전
  matching: string;
  matchingCancel: null;

  // 친선전
  roomInfo: Lobby;
  gameStart: null;
}

type actionType = keyof ActionDataTypeMap;

interface WebSocketMessage<T extends actionType> {
  action: T;
  data: ActionDataTypeMap[T];
}

type WebSocketMessageHandler = (message: WebSocketMessage<actionType>) => void;
