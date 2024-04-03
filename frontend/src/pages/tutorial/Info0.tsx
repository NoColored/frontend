import { INFO_0_DESC } from './constants';

import * as styles from '@/pages/tutorial/index.css';

const Info0 = () => {
  return (
    <>
      <div className={styles.title}>{INFO_0_DESC.TITLE}</div>
      <pre className={styles.text}> {INFO_0_DESC.HOW_TO_PLAY}</pre>
      <img
        className={styles.mapImage}
        alt='foodMap'
        src={INFO_0_DESC.image.MAP}
      />
      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <img
            className={styles.button}
            alt='moveButton'
            src={INFO_0_DESC.image.MOVE}
          />
          <div>{INFO_0_DESC.MOVE}</div>
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.button}
            alt='moveButton'
            src={INFO_0_DESC.image.JUMP}
          />
          <div>{INFO_0_DESC.JUMP}</div>
        </div>
      </div>
    </>
  );
};

export default Info0;
