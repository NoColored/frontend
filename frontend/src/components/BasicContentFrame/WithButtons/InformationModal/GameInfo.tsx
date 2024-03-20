<<<<<<<< HEAD:frontend/src/components/BasicContentFrame/WithButtons/InformationModal/gameInfo.tsx
import * as styles from './index.css';
========
import { ImageUrl } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
import * as styles from '@/components/BasicContentFrame/WithButtons/InformationModal/index.css';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
>>>>>>>> 5aba0f926a2dc51b411ca9217bfde070c9cc1553:frontend/src/components/BasicContentFrame/WithButtons/InformationModal/GameInfo.tsx

import { IMAGE_URL } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
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
            <div> : 좌/우 전환</div>
          </div>
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonStyle}
              alt='moveButton'
              src={IMAGE_URL.jump}
            />
            <div> : 점프</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
