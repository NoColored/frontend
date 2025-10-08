type WebSocketMessageMap = {
  auth: {
    authorization: null;
    invalidToken: null;
    loginFailed: null;
  };

  rankedMatch: {
    matching: string;
    matchingCancel: null;
  };

  friendlyMatch: {
    roomInfo: Lobby;
    gameStart: null;
  };
};

type WebsocketMessageUnion<T extends Record<string, unknown>> = {
  [K in keyof T]: {
    action: K;
    data: T[K];
  };
}[keyof T];

type WebsocketMessageAuth = WebsocketMessageUnion<WebSocketMessageMap['auth']>;
type WebsocketMessageRankedMatch = WebsocketMessageUnion<
  WebSocketMessageMap['rankedMatch']
>;
type WebsocketMessageFriendlyMatch = WebsocketMessageUnion<
  WebSocketMessageMap['friendlyMatch']
>;
type WebSocketMessage =
  | WebsocketMessageAuth
  | WebsocketMessageRankedMatch
  | WebsocketMessageFriendlyMatch;
