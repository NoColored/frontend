import { create } from 'zustand';

interface GameControlState {
  isActive: boolean; // 게임이 활성화 상태인지 여부
  setIsActive: (isActive: boolean) => void; // 게임 활성화 상태를 설정하는 함수
}

export const useGameControl = create<GameControlState>((set) => ({
  isActive: true,
  setIsActive: (isActive: boolean) => set({ isActive }),
}));
