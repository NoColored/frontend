import { ReactNode } from 'react';

import * as styles from './index.css';

interface Props {
  children: ReactNode;
}

const BasicContentFrame = ({ children }: Props) => {
  return <main className={styles.frame}>{children}</main>;
};

export default BasicContentFrame;
