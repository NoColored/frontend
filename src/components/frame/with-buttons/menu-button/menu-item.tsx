import { type ReactNode } from 'react';

import { useMenuStore } from './store';

interface Props {
  id: string;
  children: ReactNode;
}

const MenuItem = ({ id, children }: Props) => {
  const openId = useMenuStore((state) => state.id);

  if (id === openId) {
    return children;
  }

  return null;
};

export default MenuItem;
