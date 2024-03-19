import { useState } from 'react';

import { INFO_TYPE } from '@/components/Modal/InformationModal/constants';
import GameInfo from '@/components/Modal/InformationModal/gameInfo';
import ItemInfo from '@/components/Modal/InformationModal/itemInfo';
import MainInfo from '@/components/Modal/InformationModal/mainInfo';
import TierInfo from '@/components/Modal/InformationModal/tierInfo';
import { Props, viewProps } from '@/components/Modal/InformationModal/types';

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
