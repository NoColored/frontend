import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/imagebox/constants';
import type { tierSizeType } from '@/components/imagebox/types';

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
    backgroundImage: `url('/images/ui/icon/tier/icon-tier-${tier}.svg')`,
  });
});

const sizeVariants = Object.keys(constants.IMAGEBOX_SIZE).reduce(
  (variants, sizeKey) => {
    const size = sizeKey as tierSizeType;
    variants[size] = style([
      {
        height: constants.IMAGEBOX_SIZE[size],
      },
    ]);
    return variants;
  },
  {} as Record<tierSizeType, ReturnType<typeof style>>,
);

export const tierBox = recipe({
  base: tierBoxBase,
  variants: {
    tier: tierVariants,
    size: sizeVariants,
  },
});
