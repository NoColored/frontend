import { style } from '@vanilla-extract/css';

import { COLORED_ICON_BUTTON_SIZE_PIXEL } from '@/components/button/constants';

import { MYRANKINGITEMBOX_HEIGHT } from '@/pages/ranking/constants';

import { flexOptions, sprinkles } from '@/shared/styles';

export const wrapper = style([
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: `${COLORED_ICON_BUTTON_SIZE_PIXEL.xlarge.height} ${MYRANKINGITEMBOX_HEIGHT}`,
    gap: '12px',
    minWidth: '465px',
    width: '70%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
]);

export const myRank = style([
  {
    gridColumn: '1 / 3',
  },
]);

export const matchingModalWrapper = style([
  flexOptions({ option: 'columnCenter' }),
]);

export const matchingMessage = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    textSize: '2x',
    justifyContent: 'flexStart',
    width: 'full',
    marginBottom: '1x',
    paddingLeft: '4x',
  }),
]);

export const matchingImageWrapper = style([
  sprinkles({
    marginY: '2x',
  }),
]);
