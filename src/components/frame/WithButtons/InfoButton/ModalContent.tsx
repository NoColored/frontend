import { useState } from 'react';

import { indexProps } from './types';

import GameInfo from '@/components/frame/WithButtons/InfoButton/GameInfo';
import ItemInfo from '@/components/frame/WithButtons/InfoButton/ItemInfo';
import MainInfo from '@/components/frame/WithButtons/InfoButton/MainInfo';
import TierInfo from '@/components/frame/WithButtons/InfoButton/TierInfo';
import type { infoType } from '@/components/frame/WithButtons/InfoButton/types';

const ModalContent = ({ onClose }: indexProps) => {
  const [currentView, setCurrentView] = useState<infoType>('main');

  const handleBack = () => {
    setCurrentView('main');
  };

  if (currentView === 'game') {
    return <GameInfo onBack={handleBack} onClose={onClose} />;
  }
  if (currentView === 'item') {
    return <ItemInfo onBack={handleBack} onClose={onClose} />;
  }
  if (currentView === 'tier') {
    return <TierInfo onBack={handleBack} onClose={onClose} />;
  }
  return <MainInfo onClose={onClose} onNavigate={setCurrentView} />;
};

export default ModalContent;
