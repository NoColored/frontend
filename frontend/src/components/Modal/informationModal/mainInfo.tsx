import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton/index';
import { InfoType } from '@/components/Modal/informationModal/constants';

interface Props {
  onClose: () => void;
  onNavigate: (view: InfoType) => void;
}

const MainInfo = ({ onClose, onNavigate }: Props) => {
  return (
    <div>
      <div className={styles.text}>
        <div> 게임 정보</div>
      </div>
      <div className={styles.boxWrapper}>
        <SettingTextButton
          onClick={() => onNavigate(InfoType.game)}
          size='medium'
          colorStyle='black'
        >
          게임 방식
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate(InfoType.item)}
          size='medium'
          colorStyle='black'
        >
          아이템
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate(InfoType.tier)}
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
    </div>
  );
};

export default MainInfo;
