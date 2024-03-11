import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css.ts';

export const fontStyle = recipe({
  variants: {
    fontType: {
      textFont: sprinkles({ fontFamily: 'textFont' }),
      numFont: sprinkles({ fontFamily: 'numFont' }),
      loadingTextFont: sprinkles({ fontFamily: 'loadingTextFont' }),
      loadingNumFont: sprinkles({ fontFamily: 'loadingNumFont' }),
    },
    color: {
      red: sprinkles({ color: 'red' }),
      yellow: sprinkles({ color: 'yellow' }),
      green: sprinkles({ color: 'green' }),
      blue: sprinkles({ color: 'blue' }),
      pink: sprinkles({ color: 'pink' }),
    },
  },
});
