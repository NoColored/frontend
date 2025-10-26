import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexOptions, sprinkles } from '@/shared/styles';

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
  }),
]);

export const text = style([
  sprinkles({
    textSize: '1.5x',
    lineHeight: '2x',
  }),
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

// LobbyItem.tsx
export const lobbyItemWrapper = style([
  sprinkles({
    borderRadius: '2x',
    margin: '1x',
    backgroundColor: 'navy',
  }),
  {
    display: 'flex',

    padding: '3%',
  },
]);

export const lobbyTitleText = style([
  sprinkles({
    textSize: '1.25x',
    color: 'white',
    alignItems: 'center',
  }),
  {
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
]);

export const textsWrapper = style([
  {
    display: 'grid',
    gridTemplateRows: '70% 30%',
    paddingLeft: '5%',
    maxWidth: '100%',
  },
]);
export const playerCountText = style([
  sprinkles({
    textSize: '0.75x',
    color: 'gray300',
    display: 'flex',

    alignItems: 'center',
  }),
]);
