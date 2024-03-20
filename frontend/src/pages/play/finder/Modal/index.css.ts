import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/pages/play/finder/constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const modalWrapper = style({
  width: constants.MODAL_WRAPPER_WIDTH,
  height: constants.MODAL_WRAPPER_HEIGHT,
});

export const modalTwoButtonWrapper = style([
  flexOptions({
    option: 'rowCenter',
  }),
  sprinkles({
    width: 'full',
  }),
]);

export const contentBox = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    textSize: '1.5x',
  }),
  {
    height: '100%',
  },
]);

export const messageModalWrapper = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'spaceBetween',
});

export const messageText = recipe({
  base: [
    {
      whiteSpace: 'pre-wrap',
      textAlign: 'center',
    },
    flexOptions({ option: 'center' }),
    sprinkles({ marginBottom: '2x' }),
  ],
  variants: {
    messageType: {
      main: [
        sprinkles({
          fontSize: '2x',
          lineHeight: '3x',
        }),
      ],
      sub: sprinkles({
        textSize: '0.75x',
        color: 'gray',
      }),
    },
  },
});
