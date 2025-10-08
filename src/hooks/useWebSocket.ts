import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useWebSocketStore } from '@/states/websocket';

import { ROUTE } from '@/constants/routes';
import { Socket } from '@/features/websocket/model/Socket';

export const useWebSocket = <T extends WebSocketMessage>(
  onMessage: (message: T) => void,
) => {
  const navigate = useNavigate();
  const client = useWebSocketStore((state) => state.webSocket) as Socket;

  const handleMessage = (message: T) => {
    if (message.action === 'invalidToken') {
      navigate(`${ROUTE.error}/401`, { replace: true });
      return;
    }
    onMessage(message);
  };

  useEffect(() => {
    if (!client.isConnected()) {
      client.connect();
    }
    client.onMessage(handleMessage);

    client.onClose(() => {
      client.connect();
      client.onMessage(handleMessage);
    });

    return () => {
      client.onUnmount();
    };
  }, []);
};
