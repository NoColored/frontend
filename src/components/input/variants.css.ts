import { style } from '@vanilla-extract/css';

import { INPUT_STYLE } from './constants';

import { borderDarkOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const size = {
  widthFull: style([
    borderDarkOptions({ color: 'gray500', width: '3x' }),
    sprinkles({
      fontSize: '1x',
      backgroundColor: 'gray500',
    }),
    {
      textAlign: 'center',
      width: `100%`,
      height: INPUT_STYLE.small.height,
    },
  ]),
  small: style([
    borderDarkOptions({ color: 'gray500', width: '3x' }),
    sprinkles({
      fontSize: '1x',
      backgroundColor: 'gray500',
      marginY: '2x',
    }),
    {
      textAlign: 'center',
      width: INPUT_STYLE.small.width,
      height: INPUT_STYLE.small.height,
    },
  ]),
  medium: style([
    borderDarkOptions({ color: 'gray300', width: '3x' }),
    sprinkles({
      fontSize: '1.5x',
      paddingX: '4x',
      marginY: '1x',
      backgroundColor: 'gray300',
    }),
    {
      '@media': {
        'screen and (max-height: 365px)': {
          width: INPUT_STYLE.small.width,
          height: INPUT_STYLE.small.height,
        },
      },
      width: INPUT_STYLE.medium.width,
      height: INPUT_STYLE.medium.height,
    },
  ]),
  large: style([
    borderDarkOptions({ color: 'navy', width: '5x' }),
    sprinkles({
      fontSize: '2x',
      paddingX: '4x',
      marginY: INPUT_STYLE.large.marginY,
      backgroundColor: 'navy',
    }),
    {
      width: INPUT_STYLE.large.width,
      height: INPUT_STYLE.large.height,
    },
  ]),
};
