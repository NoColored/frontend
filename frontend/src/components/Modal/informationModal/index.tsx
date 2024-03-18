import { useState } from 'react';

import { InfoType } from '@/components/Modal/informationModal/constants';
import GameInfo from '@/components/Modal/informationModal/gameInfo';
import ItemInfo from '@/components/Modal/informationModal/itemInfo';
import MainInfo from '@/components/Modal/informationModal/mainInfo';
import TierInfo from '@/components/Modal/informationModal/tierInfo';

interface Props {
  onClose: () => void;
}

const Index = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<InfoType>(InfoType.main);

  return (
    <div>
      {currentView === InfoType.main && (
        <MainInfo onClose={onClose} onNavigate={setCurrentView} />
      )}
      {currentView === InfoType.game && <GameInfo />}
      {currentView === InfoType.item && <ItemInfo />}
      {currentView === InfoType.tier && <TierInfo />}
    </div>
  );
};

export default Index;
