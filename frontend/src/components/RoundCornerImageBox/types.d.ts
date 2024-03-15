import React from 'react';

import * as constants from '@/components/RoundCornerImageBox/constants.ts';

export interface RoundCornerImageBoxProps {
  children?: React.ReactNode;
  size: (typeof constants.ROUNDCORNER_IMAGEBOX_SIZE)[number];
  imgSrc?: string;
  tier?: (typeof constants.TIER_RANGE)[number];
  borderSize?: (typeof constants.BORDER_WEIGHT)[number];
  borderColor?: (typeof constants.BORDER_COLOR)[number];
  backgroundColor?: (typeof constants.BACKGROUND_COLOR)[number];
}
