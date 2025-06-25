import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';
import type { infoType } from '@/components/frame/with-buttons/game-info/types';

interface mainProps {
  onClose?: () => void;
  onNavigate: (view: infoType) => void;
}

const MainInfo = ({ onClose = () => {}, onNavigate }: mainProps) => {
  return (
    <>
      <div className={styles.text}>
        <div> 게임 정보</div>
      </div>
      <div className={styles.boxWrapper}>
        <SettingTextButton
          onClick={() => onNavigate('game')}
          size='medium'
          colorStyle='black'
        >
          게임 방식
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate('item')}
          size='medium'
          colorStyle='black'
        >
          아이템
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate('tier')}
          size='medium'
          colorStyle='black'
        >
          티어
        </SettingTextButton>
      </div>
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='닫기'
          color='green'
          size='small'
          onClick={onClose}
        />
      </div>
    </>
  );
};

export default MainInfo;
