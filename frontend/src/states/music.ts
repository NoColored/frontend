import { create } from 'zustand';

interface AudioStoreState {
  isPlaying: boolean;
  audio: HTMLAudioElement;
  playBackgroundSound: () => void;
  stopBackgroundSound: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

const useAudioStore = create<AudioStoreState>((set) => ({
  isPlaying: localStorage.getItem('backgroundSound') === 'true',
  audio: new Audio('/music/8-bit-game.mp3'),
  playBackgroundSound: () => {
    set((state) => {
      state.audio.play().catch((error) => console.error('음악 없음', error));
      return { isPlaying: true };
    });
  },
  stopBackgroundSound: () => {
    set((state) => {
      state.audio.pause();
      state.audio.currentTime = 0;
      return { isPlaying: false };
    });
  },
  setIsPlaying: (isPlaying: boolean) => {
    if (
      localStorage.getItem('backgroundSound') === null &&
      localStorage.getItem('effectSound') === null
    ) {
      localStorage.setItem('backgroundSound', 'true');
      localStorage.setItem('effectSound', 'true');
    }

    set(() => ({ isPlaying }));
    if (isPlaying) {
      set((state) => {
        state.audio.play().catch((error) => console.error('음악 없음', error));
        return { isPlaying: true };
      });
    } else {
      set((state) => {
        state.audio.pause();
        state.audio.currentTime = 0;
        return { isPlaying: false };
      });
    }
  },
}));

export default useAudioStore;
