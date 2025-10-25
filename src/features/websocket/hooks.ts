import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { gameWebSocketAtom, webSocketAtom } from './store';

import { ROUTE } from '@/shared/constants';

export const useWebSocket = <T extends WebSocketMessage>(
  onMessage: (message: T) => void,
) => {
  const navigate = useNavigate();
  const webSocket = useAtomValue(webSocketAtom);

  const handleMessage = (message: T) => {
    if (message.action === 'invalidToken') {
      navigate(`${ROUTE.error}/401`, { replace: true });
      return;
    }
    onMessage(message);
  };

  useEffect(() => {
    if (!webSocket.isConnected()) {
      webSocket.connect();
    }
    webSocket.onMessage(handleMessage);

    webSocket.onClose(() => {
      webSocket.connect();
      webSocket.onMessage(handleMessage);
    });

    return () => {
      webSocket.cleanUp();
    };
  }, []);
};

export const useGameWebSocket = () => {
  const webSocket = useAtomValue(gameWebSocketAtom);

  return { webSocket };
};
