import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { IMAGE_URL } from '@/components/Modal/InformationModal/constants';
import * as styles from '@/components/Modal/InformationModal/index.css';

const GameInfo = () => {
  return (
    <div>
      <SettingNavigationButton label='뒤로' />
      <div className={styles.boxWrapper}>
        <div className={styles.text}>
          <div> 게임 방식</div>
        </div>
        <div className={styles.infoText}>
          <div> 맵 하단에 있는 버튼을 클릭하면 조작할 수 있어요!</div>
        </div>
        <div className={styles.mapBackground}>
          <img
            className={styles.imageStyle}
            alt='foodMap'
            src={IMAGE_URL.map}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonStyle}
              alt='moveButton'
              src={IMAGE_URL.move}
            />
            <div> : 좌/우 전환 </div>
          </div>
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonStyle}
              alt='moveButton'
              src={IMAGE_URL.jump}
            />
            <div> : 점프 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
