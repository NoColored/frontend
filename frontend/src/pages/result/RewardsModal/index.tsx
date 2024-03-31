import { useEffect, useState } from 'react';

import type { TierReward } from '@/types/result';

import SkinReward from '@/pages/result/RewardsModal/SkinReward';
import TierUpgrade from '@/pages/result/RewardsModal/TierUpgrade';

interface Props {
  tier?: TierReward;
  skin?: string[];
  closeModal: () => void;
}

export const RewardsModal = ({ tier, skin, closeModal }: Props) => {
  const [showTier, setShowTier] = useState<boolean>(false);
  const [showSkin, setShowSkin] = useState<boolean>(false);

  useEffect(() => {
    if (tier) {
      setShowTier(true);
    } else if (skin) {
      setShowSkin(true);
    }
  }, []);

  const handleTierClose = () => {
    if (skin) {
      setShowSkin(true);
    } else {
      closeModal();
    }
    setShowTier(false);
  };

  const handleSkinClose = () => {
    setShowSkin(false);
    closeModal();
  };

  return (
    <>
      {tier && showTier && (
        <TierUpgrade closeModal={handleTierClose} tier={tier} />
      )}
      {skin && showSkin && !showTier && (
        <SkinReward closeModal={handleSkinClose} skin={skin} />
      )}
    </>
  );
};
