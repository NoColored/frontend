import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { WebSocketMessageHandler } from '@/features/websocket/types';

import { useWebSocketStore } from '@/states/websocket';

import { ROUTE } from '@/constants/routes';
import { Socket } from '@/features/websocket/model/Socket';

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
