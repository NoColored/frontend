import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/imagebox/constants';

const tierBoxBase = style([
  {
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderStyle: 'none',
  },
]);

const tierVariants: {
  [tier in (typeof constants.TIER_RANGE)[number]]?: ReturnType<typeof style>;
} = {};

constants.TIER_RANGE.forEach((tier) => {
  tierVariants[tier] = style({
    backgroundImage: `url('@/assets/ui/icon/tier/icon-tier-${tier}.svg')`,
  });
});

const sizeVariants: {
  [size in (typeof constants.IMAGEBOX_SIZE)[number]]?: ReturnType<typeof style>;
} = {};

constants.IMAGEBOX_SIZE.forEach((size) => {
  sizeVariants[size] = style([
    {
      height: constants.IMAGEBOX_SIZE_PIXEL[size],
    },
  ]);
});

export const tierBox = recipe({
  base: tierBoxBase,
  variants: {
    tier: tierVariants,
    size: sizeVariants,
  },
});
