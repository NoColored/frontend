import React from 'react';

import * as constants from '@/components/RoundCornerImageBox/constants.ts';

export interface RoundCornerImageBoxProps {
  children?: React.ReactNode;
  imgSrc?: string;

  size: (typeof constants.ROUNDCORNER_IMAGEBOX_SIZE)[number];
  tier?: (typeof constants.TIER_RANGE)[number];
  borderSize?: (typeof constants.BORDER_WEIGHT)[number];
  borderColor?: (typeof constants.COLOR)[number];
  backgroundColor?: (typeof constants.BACKGROUND_COLOR)[number];
}
