import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton/index';
import { INFO_TYPE } from '@/components/Modal/InformationModal/constants';
import { viewProps } from '@/components/Modal/InformationModal/types';

interface Props {
  onClose: () => void;
  onNavigate: (view: viewProps['now']) => void;
}

const MainInfo = ({ onClose, onNavigate }: Props) => {
  return (
    <div>
      <div className={styles.text}>
        <div> 게임 정보</div>
      </div>
      <div className={styles.boxWrapper}>
        <SettingTextButton
          onClick={() => onNavigate(INFO_TYPE.game)}
          size='medium'
          colorStyle='black'
        >
          게임 방식
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate(INFO_TYPE.item)}
          size='medium'
          colorStyle='black'
        >
          아이템
        </SettingTextButton>
        <SettingTextButton
          onClick={() => onNavigate(INFO_TYPE.tier)}
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
