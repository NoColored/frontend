import { useState } from 'react';

import GameRules from './GameRules';
import * as styles from './index.css';
import ItemInfo from './ItemInfo';
import TierInfo from './TierInfo';

import ColoredButton from '@/components/button/ColoredButton';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import SettingTextButton from '@/components/button/SettingTextButton';

const menu = {
  game: ['게임 방식', GameRules],
  item: ['아이템', ItemInfo],
  tier: ['티어', TierInfo],
} satisfies Record<string, [string, () => React.ReactNode]>;

type infoType = keyof typeof menu;

interface Props {
  onClose: () => void;
}

const GameInfo = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<infoType | 'main'>('main');

  if (currentView === 'main') {
    return (
      <>
        <div className={styles.text}>
          <div> 게임 정보</div>
        </div>
        <div className={styles.boxWrapper}>
          {(Object.keys(menu) as infoType[]).map((key) => (
            <SettingTextButton
              key={key}
              onClick={() => setCurrentView(key)}
              size='medium'
              colorStyle='black'
            >
              {menu[key][0]}
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
  }

  const InfoComponent = menu[currentView][1];

  return (
    <>
      <SettingNavigationButton
        label='< 뒤로'
        onClick={() => setCurrentView('main')}
        position='leftTop'
      />
      <SettingNavigationButton
        label='닫기 X'
        onClick={onClose}
        position='rightTop'
      />
      <InfoComponent />
    </>
  );
};

export default GameInfo;
