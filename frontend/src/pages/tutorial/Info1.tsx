import * as constants from './constants';
import * as styles from './index.css';

const Info1 = () => {
  return (
    <>
      <div className={styles.title}>noColored 와 당신</div>
      <img
        className={styles.mapImage}
        alt='사진'
        src={constants.GAME_START_URL}
      />
      <pre className={styles.text}>{constants.NO_COLORED_YOU}</pre>
    </>
  );
};

export default Info1;
