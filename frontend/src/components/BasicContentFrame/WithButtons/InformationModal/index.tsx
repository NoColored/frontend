import { useState } from 'react';

import { indexProps } from './types';

import GameInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/GameInfo';
import type { infoType } from '@/components/BasicContentFrame/WithButtons/InformationModal/types';
import ItemInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/ItemInfo';
import TierInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/TierInfo';
import MainInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/MainInfo';

const Index = ({ onClose }: indexProps) => {
  const [currentView, setCurrentView] = useState<infoType>('main');

  const handleBack = () => {
    setCurrentView('main');
  };

  return (
    <div>
      {currentView === 'main' && (
        <MainInfo onClose={onClose} onNavigate={setCurrentView} />
      )}
      {currentView === 'game' && <GameInfo onBack={handleBack} />}
      {currentView === 'item' && <ItemInfo onBack={handleBack} />}
      {currentView === 'tier' && <TierInfo onBack={handleBack} />}
    </div>
  );
};

export default Index;
