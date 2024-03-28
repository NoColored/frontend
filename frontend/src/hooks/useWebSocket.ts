import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Socket } from '@/services/websocket/Socket';

import { useWebSocketStore } from '@/states/websocket';

import { ROUTE } from '@/router/constants';

export const useWebSocket = (
  handleWebSocketMessage: (message: WebSocketMessage<actionType>) => void,
) => {
  console.log('useWebSocket');
  const navigate = useNavigate();

  const client = useWebSocketStore((state) => state.webSocket) as Socket;
  if (!client.isConnected()) {
    client.connect();
  }

  useEffect(() => {
    console.log('onMessage');
    client.onMessage((message) => {
      if (message.action === 'invalidToken') {
        navigate(`${ROUTE.error}/401`, { replace: true });
        return;
      }
      handleWebSocketMessage(message);
    });

    return () => {
      client.unmount();
    };
  }, []);
};
