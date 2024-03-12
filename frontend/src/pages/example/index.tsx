import * as styles from './index.css.ts';

import ColoredIconButton from '@/components/button/colored-icon-button/index.tsx';

import iconWhite from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  return (
    <div>
      <div className={styles.exampleStyle}>Example</div>
      <ColoredIconButton icon={iconWhite} text='테스트' />
      {/* <Game /> */}
    </div>
  );
};

export default Example;
