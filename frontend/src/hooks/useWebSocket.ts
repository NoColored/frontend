import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Socket } from '@/services/websocket/Socket';

import { useWebSocketStore } from '@/states/websocket';

import { ROUTE } from '@/router/constants';

export const useWebSocket = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<WebSocketMessage<actionType>>(
    {} as WebSocketMessage<actionType>,
  );

  const client = useWebSocketStore((state) => state.webSocket) as Socket;
  if (!client.isConnected()) {
    client.connect();
  }

  useEffect(() => {
    client.onMessage(setMessage);
  }, []);

  useEffect(() => {
    if (message.action === 'invalidToken') {
      navigate(`${ROUTE.error}/401`, { replace: true });
    }
  }, [message]);

  return message;
};
