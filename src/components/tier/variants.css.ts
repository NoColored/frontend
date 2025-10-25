import { style } from '@vanilla-extract/css';

import { variant } from '@/styles/utils';

import { TIER } from '@/models/tier/constants';

export const tier = variant([...TIER], (name) =>
  style({
    backgroundImage: `url('/images/ui/icon/tier/icon-tier-${name}.svg')`,
  }),
);

export const size = variant(
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
