import * as styles from './index.css';
import SettingTextButton from '@/components/button/SettingTextButton/index';
import { ViewType } from '@/components/Modal/informationModal/constants';

interface Props {
  onNavigate: (view: ViewType) => void;
}

const MainInfo = ({ onNavigate }: Props) => {
  return (
    <div>
      <div className={styles.text}>
        <div> 게임 정보 </div>
      </div>
      <div className={styles.boxWrapper}>
        <SettingTextButton
          onClick={() => onNavigate(ViewType.GameInfo)}
          size='medium'
          colorStyle='black'
        >
          게임 방식
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate(ViewType.ItemInfo)}
          size='medium'
          colorStyle='black'
        >
          아이템
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate(ViewType.TierInfo)}
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
