import { createStore, Provider } from 'jotai';
import { useMemo } from 'react';

import { labelName, skinUrl } from './store';

interface Props {
  children: React.ReactNode;
  equippedSkinUrl: string;
  equippedLabel: string;
}

export const CollectionProvider = ({
  children,
  equippedSkinUrl,
  equippedLabel,
}: Props) => {
  const collectionStore = useMemo(() => {
    const store = createStore();
    store.set(skinUrl, equippedSkinUrl);
    store.set(labelName, equippedLabel);
    return store;
  }, []);

  return <Provider store={collectionStore}>{children}</Provider>;
};
