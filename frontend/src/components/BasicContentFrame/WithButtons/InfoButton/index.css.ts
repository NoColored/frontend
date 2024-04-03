import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const boxWrapper = style([flexOptions({ option: 'columnCenter' })]);

export const buttonWrapper = style([flexOptions({ option: 'center' })]);

export const tierWrapper = style([
  flexOptions({ option: 'center' }),
  {
    padding: vars.space['1x'],
  },
]);

export const text = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '2x',
    paddingBottom: '2x',
  }),
]);

export const gameInfoWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    position: 'relative',
  }),
  {
    height: '300px',
    width: '450px',
  },
]);

export const left = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    left: '0',
  },
]);

export const right = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    right: '0',
  },
]);

export const textMargin = style([
  sprinkles({
    margin: '3x',
  }),
  {
    textAlign: 'center',
  },
]);

export const lowTierStyle = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    marginBottom: '1x',
  }),
  {
    justifyContent: 'space-around',
  },
]);

export const highTierStyle = style([
  flexOptions({ option: 'center' }),
  {
    justifyContent: 'space-evenly',
  },
]);

export const buttonBorderStyle = style([
  sprinkles({
    borderRadius: '4x',
    borderWidth: '5x',
    borderColor: 'black',
  }),
  {
    margin: '3px',
  },
]);
