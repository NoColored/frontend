import * as constants from './constants';
import * as styles from './index.css';

const Info2 = () => {
  return (
    <>
      <div className={styles.title}>결투!</div>
      <div className={styles.imgWrapper}>
        <img
          className={styles.gameImage}
          src={constants.FIGHT_URL.NO_COLORED}
          alt='사진2'
        />
        <img
          className={styles.gameImage}
          src={constants.FIGHT_URL.HIDE_SEEK}
          alt='사진2'
        />
      </div>
    </>
  );
};

export default Info2;
