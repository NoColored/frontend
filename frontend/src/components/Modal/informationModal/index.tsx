import { useState } from 'react';
import * as styles from './index.css';
import ColoredButton from '@/components/button/ColoredButton/index';
import MainInfo from '@/components/Modal/informationModal/mainInfo';
import GameInfo from '@/components/Modal/informationModal/gameInfo';
import ItemInfo from '@/components/Modal/informationModal/itemInfo';
import TierInfo from '@/components/Modal/informationModal/tierInfo';
import { InfoType } from '@/components/Modal/informationModal/constants';

interface Props {
  onClose: () => void;
}

const Index = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<InfoType>(InfoType.main);

  return (
    <div>
      {currentView === InfoType.main && (
        <MainInfo onNavigate={setCurrentView} />
      )}
      {currentView === InfoType.game && <GameInfo />}
      {currentView === InfoType.item && <ItemInfo />}
      {currentView === InfoType.tier && <TierInfo />}
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

export default Index;
