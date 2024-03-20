import * as styles from './index.css';

import { ImageUrl } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import { indexProps } from './types';

const GameInfo = ({ onBack }: indexProps) => {
  return (
    <div>
      <SettingNavigationButton label='뒤로' onClick={onBack} />
      <div className={styles.boxWrapper}>
        <div className={styles.text}>
          <div> 게임 방식</div>
        </div>
        <div className={styles.infoText}>
          <div> 맵 하단에 있는 버튼을 클릭하면 조작할 수 있어요!</div>
        </div>
        <div className={styles.mapBackground}>
          <img className={styles.imageStyle} alt='foodMap' src={ImageUrl.map} />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonStyle}
              alt='moveButton'
              src={ImageUrl.move}
            />
            <div> : 좌/우 전환</div>
          </div>
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonStyle}
              alt='moveButton'
              src={ImageUrl.jump}
            />
            <div> : 점프</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
