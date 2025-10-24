import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { gameWebSocketAtom, webSocketAtom } from './store';

import { ROUTE } from '@/constants/routes';

export const useWebSocket = <T extends WebSocketMessage>(
  onMessage: (message: T) => void,
) => {
  const navigate = useNavigate();
  const client = useAtomValue(webSocketAtom);

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
      client.cleanUp();
    };
  }, []);
};

export const useGameWebSocket = () => {
  const webSocket = useAtomValue(gameWebSocketAtom);

  return { webSocket };
};
