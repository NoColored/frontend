import { useState } from 'react';
import * as styles from './index.css';
import ColoredButton from '@/components/button/ColoredButton/index';
import MainInfo from '@/components/Modal/informationModal/mainInfo';
import GameInfo from '@/components/Modal/informationModal/gameInfo';
import ItemInfo from '@/components/Modal/informationModal/itemInfo';
import TierInfo from '@/components/Modal/informationModal/tierInfo';
import { ViewType } from '@/components/Modal/informationModal/constants';

interface Props {
  onClose: () => void;
}

const Index = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.Main);

  return (
    <div>
      {currentView === ViewType.Main && (
        <MainInfo onNavigate={setCurrentView} />
      )}
      {currentView === ViewType.GameInfo && <GameInfo />}
      {currentView === ViewType.ItemInfo && <ItemInfo />}
      {currentView === ViewType.TierInfo && <TierInfo />}
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
