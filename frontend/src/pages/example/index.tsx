import * as styles from './index.css.ts';

import Game from '@/components/Game.tsx'

const Example = () => {
  return (
    <div>
      <div className={styles.exampleStyle}>Example</div>
      <Game />
    </div>
  );
};

export default Example;
