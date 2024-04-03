import * as styles from './index.css';

import { INFO_1_DESC } from '@/pages/tutorial/constants';

const Info1 = () => {
  return (
    <>
      <div className={styles.title}>{INFO_1_DESC.TITLE}</div>
      <img
        className={styles.mapImage}
        alt='사진'
        src={INFO_1_DESC.image.GAME_START}
      />
      <pre className={styles.textLong}>{INFO_1_DESC.NO_COLORED_YOU}</pre>
    </>
  );
};

export default Info1;
