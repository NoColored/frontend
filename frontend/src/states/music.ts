import create from 'zustand';

interface AudioStoreState {
  isPlaying: boolean;
  audio: HTMLAudioElement;
  play: () => void;
  stop: () => void;
  setIsPlaying: (isPlaying: boolean) => void; // 추가된 부분
}

const useAudioStore = create<AudioStoreState>((set) => ({
  isPlaying: localStorage.getItem('backgroundSound') === 'true',
  audio: new Audio('/music/123.mp3'),
  play: () => {
    set((state) => {
      state.audio.play().catch((error) => console.error('음악 없음', error));
      return { isPlaying: true };
    });
  },
  stop: () => {
    set((state) => {
      state.audio.pause();
      state.audio.currentTime = 0;
      return { isPlaying: false };
    });
  },
  setIsPlaying: (isPlaying: boolean) => {
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
