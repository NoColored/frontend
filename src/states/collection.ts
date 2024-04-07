import { create } from 'zustand';

interface CollectionState {
  skinId: number;
  skinUrl: string;
  labelId: number;
  labelName: string;
  setSkinId: (id: number) => void;
  setSkinUrl: (url: string) => void;
  setLabel: (id: number) => void;
  setLabelName: (name: string) => void;
}

export const useCollectionStateStore = create<CollectionState>((set) => ({
  skinId: -1,
  labelId: -1,
  skinUrl: '',
  labelName: '',
  setSkinId: (id: number) => {
    set({ skinId: id });
  },
  setSkinUrl: (url: string) => {
    set({ skinUrl: url });
  },
  setLabel: (id: number) => {
    set({ labelId: id });
  },
  setLabelName: (name: string) => {
    set({ labelName: name });
  },
}));
