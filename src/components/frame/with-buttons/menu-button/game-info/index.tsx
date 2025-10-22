import { useState } from 'react';

import GameRules from './GameRules';
import * as styles from './index.css';
import ItemInfo from './ItemInfo';
import TierInfo from './TierInfo';

import ColoredButton from '@/components/button/ColoredButton';
import SettingTextButton from '@/components/button/SettingTextButton';

const menu = {
  game: '게임 방식',
  item: '아이템',
  tier: '티어',
};

type infoType = keyof typeof menu;

interface Props {
  onClose: () => void;
}

const GameInfo = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<infoType | 'main'>('main');

  const handleBack = () => setCurrentView('main');

  if (currentView === 'game') {
    return <GameRules onBack={handleBack} onClose={onClose} />;
  }
  if (currentView === 'item') {
    return <ItemInfo onBack={handleBack} onClose={onClose} />;
  }
  if (currentView === 'tier') {
    return <TierInfo onBack={handleBack} onClose={onClose} />;
  }
  return (
    <>
      <div className={styles.text}>
        <div> 게임 정보</div>
      </div>
      <div className={styles.boxWrapper}>
        {Object.entries(menu).map(([key, title]) => (
          <SettingTextButton
            key={key}
            onClick={() => setCurrentView(key as infoType)}
            size='medium'
            colorStyle='black'
          >
            {title}
          </SettingTextButton>
        ))}
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

export default GameInfo;
