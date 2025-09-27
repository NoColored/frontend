import * as styles from './index.css';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BasicContentFrame = ({ children }: Props) => {
  return <main className={styles.frame}>{children}</main>;
};

export default BasicContentFrame;
