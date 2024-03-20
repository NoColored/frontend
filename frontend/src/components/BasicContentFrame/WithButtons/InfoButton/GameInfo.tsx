import * as styles from './index.css';
import { indexProps } from './types';

import { IMAGE_URL } from '@/components/BasicContentFrame/WithButtons/InfoButton/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';

const GameInfo = ({ onBack }: indexProps) => {
  return (
    <>
      <SettingNavigationButton
        label='뒤로'
        onClick={onBack}
        position='leftTop'
      />
      <SettingNavigationButton
        label='닫기'
        onClick={() => {}}
        position='rightTop'
      />
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
    </>
  );
};

export default GameInfo;
