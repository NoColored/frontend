import { keyframes } from '@vanilla-extract/css';

export const TEXTBOX_COLOR = ['white'] as const;

export const BACKGROUND_COLOR = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'navy',
  'gray300',
  'black',
] as const;

export const BLINK_EFFECT = keyframes({
  '50%': { opacity: 0 },
});
