import { useState } from 'react';

import GameRules from './GameRules';
import ItemInfo from './ItemInfo';
import MainInfo from './MainInfo';
import TierInfo from './TierInfo';

import type { infoType } from './types';

interface Props {
  onClose: () => void;
}

const GameInfo = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<infoType>('main');

  const handleBack = () => {
    setCurrentView('main');
  };

  if (currentView === 'game') {
    return <GameRules onBack={handleBack} onClose={onClose} />;
  }
  if (currentView === 'item') {
    return <ItemInfo onBack={handleBack} onClose={onClose} />;
  }
  if (currentView === 'tier') {
    return <TierInfo onBack={handleBack} onClose={onClose} />;
  }
  return <MainInfo onClose={onClose} onNavigate={setCurrentView} />;
};

export default GameInfo;
