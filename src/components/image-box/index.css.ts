import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { borderLightOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { variant } from '@/styles/utils';

const base = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    borderRadius: '2x',
    paddingY: '2x',
    alignItems: 'center',
  }),
  {
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
]);

const size = variant(
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

const borderColor = variant(
  ['red', 'yellow', 'green', 'blue', 'pink', 'black'] as const,
  (color) => style([borderLightOptions({ color })]),
);

const borderSize = variant(['1x', '3x', '5x'] as const, (width) =>
  style([borderLightOptions({ width })]),
);

const roundCornerImageBox = recipe({
  base,
  variants: {
    size,
    borderSize,
    borderColor,
    backgroundColor,
  },
});

export const styles = {
  roundCornerImageBox,
};
