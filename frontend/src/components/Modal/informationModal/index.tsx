import { useState } from 'react';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton/index';
import SettingTextButton from '@/components/button/SettingTextButton/index';
import GameInfo from '@/components/Modal/informationModal/gameInfo';
import ItemInfo from '@/components/Modal/informationModal/itemInfo';
import TierInfo from '@/components/Modal/informationModal/tierInfo';

interface Props {
  onClose: () => void;
}

const Index = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState('main');

  return (
    <div>
      {currentView === 'main' && (
        <div>
          <div className={styles.text}>
            <div> 게임 정보 </div>
          </div>
          <div className={styles.boxWrapper}>
            <SettingTextButton
              onClick={() => setCurrentView('gameInfo')}
              size='medium'
              colorStyle='black'
            >
              게임 방식
            </SettingTextButton>
            <SettingTextButton
              onClick={() => setCurrentView('itemInfo')}
              size='medium'
              colorStyle='black'
            >
              아이템
            </SettingTextButton>
            <SettingTextButton
              onClick={() => setCurrentView('tierInfo')}
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
      )}
      {currentView === 'gameInfo' && <GameInfo />}
      {currentView === 'itemInfo' && <ItemInfo />}
      {currentView === 'tierInfo' && <TierInfo />}
    </div>
  );
};

export default Index;
