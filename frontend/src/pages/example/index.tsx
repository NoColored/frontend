import * as styles from './index.css.ts';

import ExampleScene from '@/scene/example-scene/index.tsx';

const Example = () => {
  return (
    <div>
      <div className={styles.exampleStyle}>Example</div>
      <ExampleScene />
      <div className={styles.testStyle}>classsNameTest</div>
    </div>
  );
};

export default Example;
