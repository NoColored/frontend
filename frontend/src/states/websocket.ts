import { create } from 'zustand';

import { GameSocket } from '@/services/websocket/GameSocket';

interface WebsocketStore {
  webSocket: GameSocket | null;
  connectWebSocket: () => void;
}

export const useWebSocketStore = create<WebsocketStore>((set) => ({
  webSocket: null,
  connectWebSocket: () => {
    set({ webSocket: new GameSocket() });
  },
}));
