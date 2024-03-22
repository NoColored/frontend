import { useState } from 'react';

import { useWebSocketStore } from '@/states/websocket';

export const useWebSocket = <T>(initialValue: T): T => {
  const [data, setData] = useState<T>(initialValue);

  const { webSocket, connectWebSocket } = useWebSocketStore();

  if (!webSocket) {
    connectWebSocket();
  }

  webSocket?.getMessage(setData);

  return data;
};
