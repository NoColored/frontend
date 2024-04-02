import { IMAGE_URL } from '@/components/BasicContentFrame/WithButtons/InfoButton/constants';

import * as styles from '@/pages/tutorial/index.css';

const Info0 = () => {
  return (
    <>
      <div className={styles.title}>게임 방식</div>
      <div className={styles.text}>
        맵 하단에 있는 버튼을 클릭하면 조작할 수 있어요!
      </div>

      <img className={styles.mapImage} alt='foodMap' src={IMAGE_URL.map} />
      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <img
            className={styles.button}
            alt='moveButton'
            src={IMAGE_URL.move}
          />
          <div>: 좌/우 전환</div>
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.button}
            alt='moveButton'
            src={IMAGE_URL.jump}
          />
          <div>: 점프</div>
        </div>
      </div>
    </>
  );
};

export default Info0;
