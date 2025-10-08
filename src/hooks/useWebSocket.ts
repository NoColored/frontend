import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { WebSocketMessageHandler } from '@/types/websocket';

import { Socket } from '@/services/websocket/Socket';

import { useWebSocketStore } from '@/states/websocket';

import { ROUTE } from '@/constants/routes';

export const useWebSocket = (
  handleWebSocketMessage: WebSocketMessageHandler,
) => {
  const navigate = useNavigate();
  const $handleWebSocketMessage: WebSocketMessageHandler = (message) => {
    if (message.action === 'invalidToken') {
      navigate(`${ROUTE.error}/401`, { replace: true });
      return;
    }
    handleWebSocketMessage(message);
  };

  const client = useWebSocketStore((state) => state.webSocket) as Socket;
  if (!client.isConnected()) {
    client.connect();
  }

  useEffect(() => {
    client.onMessage($handleWebSocketMessage);
    client.onClose($handleWebSocketMessage);
    return () => {
      client.unmount();
    };
  }, []);
};
