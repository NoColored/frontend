import { useState } from 'react';

import { InfoType } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
import GameInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/GameInfo';
import ItemInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/ItemInfo';
import MainInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/MainInfo';
import TierInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/TierInfo';

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
