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
          alt='머리밟기'
        />
        <img
          className={styles.gameImage}
          src={constants.FIGHT_URL.HIDE_SEEK}
          alt='스킨 드러남'
        />
      </div>
      <pre className={styles.text}>
        {constants.INFO2_DESC.HEAD}
        <br/>
        {constants.INFO2_DESC.ITEM}
      </pre>
    </>
  );
};

export default Info2;
