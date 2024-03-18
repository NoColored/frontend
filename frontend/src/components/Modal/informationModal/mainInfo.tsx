import * as styles from './index.css';
import SettingTextButton from '@/components/button/SettingTextButton/index';
import { InfoType } from '@/components/Modal/informationModal/constants';

interface Props {
  onNavigate: (view: InfoType) => void;
}

const MainInfo = ({ onNavigate }: Props) => {
  return (
    <div>
      <div className={styles.text}>
        <div> 게임 정보 </div>
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
    </div>
  );
};

export default MainInfo;
