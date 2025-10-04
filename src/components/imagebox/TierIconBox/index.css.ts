import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { variant } from '@/styles/utils';

import { TIER } from '@/constants/tier';

const base = style([
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

const tier = variant([...TIER], (name) =>
  style({
    backgroundImage: `url('/images/ui/icon/tier/icon-tier-${name}.svg')`,
  }),
);

const size = variant(
  {
    xsmall: '32px',
    small: '48px',
    medium: '96px',
    full: '100%',
  } as const,
  ([_, value]) =>
    style({
      height: value,
    }),
);

export const tierBox = recipe({
  base,
  variants: {
    tier,
    size,
  },
});
