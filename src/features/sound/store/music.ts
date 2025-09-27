import { create } from 'zustand';

interface BgmState {
  isPlaying: boolean;
  audio: HTMLAudioElement;
  playBackgroundSound: () => void;
}

export const useBgmStore = create<BgmState>((set) => ({
  isPlaying: false,
  audio: new Audio('/music/8-bit-game.mp3'),

  playBackgroundSound: () =>
    set((state) => {
      state.audio.loop = true;
      state.audio.play().catch((error) => console.error('음악 없음', error));
      return { isPlaying: true };
    }),
}));
