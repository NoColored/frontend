import { style } from '@vanilla-extract/css';

import { borderLightOptions, sprinkles, variant } from '@/shared/styles';

export const size = variant(
  {
    // xsmall: '32px',
    small: '48px',
    medium: '96px',
    large: '144px',
    // xlarge: '240px',
    full: '100%',
  } as const,
  ([_, height]) =>
    style({
      height,
    }),
);

export const backgroundColor = variant(['white', 'gray200'] as const, (color) =>
  sprinkles({
    backgroundColor: color,
  }),
);

export const borderColor = variant(
  ['red', 'yellow', 'green', 'blue', 'pink', 'black'] as const,
  (color) => style([borderLightOptions({ color })]),
);

export const borderSize = variant(['1x', '3x', '5x'] as const, (width) =>
  style([borderLightOptions({ width })]),
);
