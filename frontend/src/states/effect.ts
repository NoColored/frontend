import { create } from 'zustand';

interface EffectStoreState {
  isEffect: boolean;
  setEffectSound: (enabled: boolean) => void;
  playEffectSound: () => void;
}

const useEffectSoundStore = create<EffectStoreState>((set) => ({
  isEffect: localStorage.getItem('effectSound') === 'true',
  setEffectSound: (enabled: boolean) => {
    localStorage.setItem('effectSound', enabled.toString());
    set({ isEffect: enabled });
  },
  playEffectSound: () => {
    if (localStorage.getItem('effectSound') === 'true') {
      const effectSound = new Audio('/music/blop.mp3');
      effectSound.play().catch((error) => console.error('이펙트 오류', error));
    }
  },
}));

export default useEffectSoundStore;
