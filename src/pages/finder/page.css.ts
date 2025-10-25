import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { flexOptions, sprinkles } from '@/shared/styles';

export const contentWrapper = sprinkles({
  width: 'full',
  height: 'full',
});

export const topButtonsWrapper = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    justifyContent: 'spaceBetween',
    paddingTop: '2x',
    marginBottom: '1x',
  }),
  {
    paddingLeft: '3%',
    paddingRight: '3%',
  },
]);

export const rightButtonsWrapper = style([flexOptions({ option: 'row' })]);

export const partyListWrapper = style([
  {
    display: 'grid',
    gridTemplateRows: '33% 33% 33%',
    gridTemplateColumns: '50% 50%',
    height: calc.subtract(
      calc.subtract(calc.subtract('100%', '48px'), '16px'),
      '32px',
    ),
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  sprinkles({
    marginTop: '1x',
  }),
]);

export const bottomButtonsWrapper = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    paddingTop: '1x',
    width: 'full',
  }),
  {
    paddingLeft: '3%',
    paddingRight: '3%',
  },
]);
