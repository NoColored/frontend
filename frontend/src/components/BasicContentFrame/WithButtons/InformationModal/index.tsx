import { useState } from 'react';

import { indexProps } from './types';

import GameInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/GameInfo';
import { InfoType } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
import ItemInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/ItemInfo';
import TierInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/TierInfo';
import MainInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/MainInfo';

const Index = ({ onClose }: indexProps) => {
  const [currentView, setCurrentView] = useState<InfoType>(0);

  const handleBack = () => {
    setCurrentView(InfoType.main);
  };

  return (
    <div>
      {currentView === InfoType.main && (
        <MainInfo onClose={onClose} onNavigate={setCurrentView} />
      )}
      {currentView === InfoType.game && <GameInfo onBack={handleBack} />}
      {currentView === InfoType.item && <ItemInfo onBack={handleBack} />}
      {currentView === InfoType.tier && <TierInfo onBack={handleBack} />}
    </div>
  );
};

export default Index;
