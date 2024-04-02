import * as constants from './constants';
import * as styles from './index.css';
import { indexProps } from './types';

import { IMAGE_URL } from '@/components/BasicContentFrame/WithButtons/InfoButton/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';

const GameInfo = ({ onBack, onClose }: indexProps) => {
  return (
    <>
      <SettingNavigationButton
        label='뒤로'
        onClick={onBack}
        position='leftTop'
      />
      <SettingNavigationButton
        label='닫기'
        onClick={onClose}
        position='rightTop'
      />
      <div className={styles.boxWrapper}>
        <div className={styles.text}>
          <div> 게임 방식</div>
        </div>
        <div className={styles.infoText}>
          <div> {constants.HOW_TO_PLAY.INFO}</div>
        </div>
        <div className={styles.infoText}>
          <div> {constants.HOW_TO_PLAY.KEYBOARD}</div>
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
            <div>{constants.HOW_TO_PLAY.MOVE}</div>
          </div>
          <div className={styles.buttonWrapper}>
            <img
              className={styles.buttonStyle}
              alt='moveButton'
              src={IMAGE_URL.jump}
            />
            <div>{constants.HOW_TO_PLAY.JUMP}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameInfo;
