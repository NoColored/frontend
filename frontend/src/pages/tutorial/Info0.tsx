import * as constants from './constants';

import { IMAGE_URL } from '@/components/BasicContentFrame/WithButtons/InfoButton/constants';

import * as styles from '@/pages/tutorial/index.css';

const Info0 = () => {
  return (
    <>
      <div className={styles.title}>{constants.TUTORIAL_TITLE.INFO0}</div>
      <pre className={styles.text}> {constants.HOW_TO_PLAY}</pre>
      <img className={styles.mapImage} alt='foodMap' src={IMAGE_URL.map} />
      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <img
            className={styles.button}
            alt='moveButton'
            src={IMAGE_URL.move}
          />
          <div>{constants.INFO0_DESC.MOVE}</div>
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.button}
            alt='moveButton'
            src={IMAGE_URL.jump}
          />
          <div>{constants.INFO0_DESC.JUMP}</div>
        </div>
      </div>
    </>
  );
};

export default Info0;
