import { create } from 'zustand';

import { MENU_ID } from './constants';

interface MenuState {
  id: string;
}

interface MenuActions {
  setMenuId: (id: string) => void;
}

type MenuStore = MenuState & MenuActions;

export const useMenuStore = create<MenuStore>((set) => ({
  id: MENU_ID.home,
  setMenuId: (id: string) => set({ id }),
}));
