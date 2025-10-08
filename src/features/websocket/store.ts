import { create } from 'zustand';

import { GameSocket } from '@/features/websocket/model/GameSocket';

interface WebsocketStore {
  webSocket: GameSocket;
}

export const useWebSocketStore = create<WebsocketStore>(() => ({
  webSocket: new GameSocket(),
}));
