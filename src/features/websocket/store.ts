import { atom } from 'jotai';

import { GameSocket } from './model/GameSocket';
import { type Socket } from './model/Socket';

export const gameWebSocketAtom = atom(new GameSocket());

export const webSocketAtom = atom<Socket>((get) => get(gameWebSocketAtom));
