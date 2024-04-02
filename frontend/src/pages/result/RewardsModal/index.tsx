import { useState } from 'react';

import type { TierReward } from '@/types/result';

import SkinReward from '@/pages/result/RewardsModal/SkinReward';
import TierUpgrade from '@/pages/result/RewardsModal/TierUpgrade';

interface Props {
  tier?: TierReward;
  skin: string[];
  closeModal: () => void;
}

export const RewardsModal = ({ tier, skin, closeModal }: Props) => {
  const hasTier = !!tier && tier.upgrade;
  const hasSkin = skin.length > 0;
  const [showTier, setShowTier] = useState<boolean>(hasTier);

  const handleTierClose = () => {
    if (!hasSkin) {
      closeModal();
      return;
    }
    setShowTier(false);
  };

  return (
    <>
      {hasTier && <TierUpgrade closeModal={handleTierClose} tier={tier} />}
      {hasSkin && !showTier && (
        <SkinReward closeModal={closeModal} skin={skin} />
      )}
    </>
  );
};
