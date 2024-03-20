import { useState } from 'react';

import { indexProps, viewProps } from './types';

import GameInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/gameInfo';
import { INFO_TYPE } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
import ItemInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/itemInfo';
import TierInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/tierInfo';
import MainInfo from '@/components/BasicContentFrame/WithButtons/InformationModal/mainInfo';

const Index = ({ onClose }: indexProps) => {
  const [currentView, setCurrentView] = useState<viewProps['now']>(
    INFO_TYPE.main,
  );

  const handleBack = () => {
    setCurrentView(INFO_TYPE.main);
  };

  return (
    <div>
      {currentView === INFO_TYPE.main && (
        <MainInfo onClose={onClose} onNavigate={setCurrentView} />
      )}
      {currentView === INFO_TYPE.game && <GameInfo onBack={handleBack} />}
      {currentView === INFO_TYPE.item && <ItemInfo onBack={handleBack} />}
      {currentView === INFO_TYPE.tier && <TierInfo onBack={handleBack} />}
    </div>
  );
};

export default Index;
