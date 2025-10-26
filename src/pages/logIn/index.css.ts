import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/shared/styles';

export { contentWrapper, buttonWrapper } from '@/pages/landing/index.css';

export const logInFailMessageWrapper = style([
  sprinkles({
    marginY: '8x',
  }),
  {
    textAlign: 'center',
  },
]);

export const logInFailMessage = style([
  sprinkles({
    fontSize: '1.5x',
    marginY: '2x',
  }),
  {
    lineHeight: '32px',
  },
]);
