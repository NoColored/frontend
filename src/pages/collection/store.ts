import { atom } from 'jotai';

export const skinUrl = atom('');
export const skinId = atom(0);
export const skin = atom(
  (get) => ({
    url: get(skinUrl),
    id: get(skinId),
  }),
  (_, set, selected: Skin) => {
    set(skinUrl, selected.link);
    set(skinId, selected.id);
  },
);

export const labelName = atom('');
export const labelId = atom(0);
export const label = atom(
  (get) => ({
    name: get(labelName),
    id: get(labelId),
  }),
  (_, set, selected: Label) => {
    set(labelName, selected.name);
    set(labelId, selected.id);
  },
);
