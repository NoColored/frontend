import { useState } from 'react';

import GameInfo from '@/components/frame/with-buttons/InfoButton/GameInfo';
import ItemInfo from '@/components/frame/with-buttons/InfoButton/ItemInfo';
import MainInfo from '@/components/frame/with-buttons/InfoButton/MainInfo';
import TierInfo from '@/components/frame/with-buttons/InfoButton/TierInfo';
import type { infoType } from '@/components/frame/with-buttons/InfoButton/types';

interface Props {
  onClose: () => void;
}

const ModalContent = ({ onClose }: Props) => {
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
