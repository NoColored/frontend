import React from 'react';

import * as constants from '@/components/imagebox/constants';

export interface RoundCornerImageBoxProps {
  children?: React.ReactNode;
  imgSrc?: string;

  size: (typeof constants.IMAGEBOX_SIZE)[number];
  borderSize?: (typeof constants.BORDER_WEIGHT)[number];
  borderColor?: (typeof constants.COLOR)[number];
  backgroundColor?: (typeof constants.BACKGROUND_COLOR)[number];
}

export interface TierBoxProps {
  tier: (typeof constants.TIER_RANGE)[number];
  size: (typeof constants.IMAGEBOX_SIZE)[number];
}
