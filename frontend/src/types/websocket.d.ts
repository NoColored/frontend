interface ActionDataTypeMap {
  // auth
  authorization: null;
  invalidToken: null;
  loginFailed: null;

  // game
  matching: string;
}

type actionType = keyof ActionDataTypeMap;

interface WebSocketMessage<T extends actionType> {
  action: T;
  data: ActionDataTypeMap[T];
}
