import { useAtomValue, useSetAtom } from 'jotai';

import { label, labelName, skin, skinUrl } from './store';

export const useSelectedSkin = () => useAtomValue(skinUrl);

export const useSelectedLabel = () => useAtomValue(labelName);

export const useSelectedCollection = () => {
  return {
    skin: useAtomValue(skin),
    label: useAtomValue(label),
  };
};

export const useCollectionActions = () => {
  const setSelectedSkin = useSetAtom(skin);
  const setSelectedLabel = useSetAtom(label);

  return {
    setSelectedSkin,
    setSelectedLabel,
  };
};
