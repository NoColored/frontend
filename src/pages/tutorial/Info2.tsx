import * as styles from './index.css';

import { INFO_2_DESC } from '@/pages/tutorial/constants';

const Info2 = () => {
  return (
    <>
      <div className={styles.title}>{INFO_2_DESC.TITLE}</div>
      <div className={styles.imgWrapper}>
        <img
          className={styles.gameImage}
          src={INFO_2_DESC.image.NO_COLORED}
          alt='머리밟기'
        />
        <img
          className={styles.gameImage}
          src={INFO_2_DESC.image.HIDE_SEEK}
          alt='스킨 드러남'
        />
      </div>
      <pre className={styles.text}>
        {INFO_2_DESC.HEAD}
        <br />
        {INFO_2_DESC.ITEM}
      </pre>
    </>
  );
};

export default Info2;
