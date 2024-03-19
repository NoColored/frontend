import { useState } from 'react';

import { Props } from './types';

import GameInfo from '@/components/BasicContentFrame/InformationModal/gameInfo';
import { INFO_TYPE } from '@/components/BasicContentFrame/InformationModal/constants';
import ItemInfo from '@/components/BasicContentFrame/InformationModal/itemInfo';
import TierInfo from '@/components/BasicContentFrame/InformationModal/tierInfo';
import { viewProps } from '@/components/BasicContentFrame/InformationModal/types';
import MainInfo from '@/components/BasicContentFrame/InformationModal/mainInfo';

const Index = ({ onClose }: Props) => {
  const [currentView, setCurrentView] = useState<viewProps['now']>(
    INFO_TYPE.main,
  );

  return (
    <div>
      {currentView === INFO_TYPE.main && (
        <MainInfo onClose={onClose} onNavigate={setCurrentView} />
      )}
      {currentView === INFO_TYPE.game && <GameInfo />}
      {currentView === INFO_TYPE.item && <ItemInfo />}
      {currentView === INFO_TYPE.tier && <TierInfo />}
    </div>
  );
};

export default Index;
