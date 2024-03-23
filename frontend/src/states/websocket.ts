import { create } from 'zustand';

import { GameSocket } from '@/services/websocket/GameSocket';

interface WebsocketStore {
  webSocket: GameSocket;
}

export const useWebSocketStore = create<WebsocketStore>(() => ({
  webSocket: new GameSocket(),
}));
