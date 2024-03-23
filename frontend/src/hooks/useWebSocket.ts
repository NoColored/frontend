import { useState } from 'react';

import { Socket } from '@/services/websocket/Socket';

import { useWebSocketStore } from '@/states/websocket';

export const useWebSocket = () => {
  const [message, setMessage] = useState<WebSocketMessage<actionType>>(
    {} as WebSocketMessage<actionType>,
  );

  const client = useWebSocketStore((state) => state.webSocket) as Socket;

  if (!client.isConnected()) {
    client.connect();
  }

  client.onMessage(setMessage);
  console.log(message);

  return message;
};
