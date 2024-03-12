import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { textFont } from '@/styles/font.css.ts';
import { vars } from '@/styles/vars.css.ts';

const settingButtonBase = style({
  boxSizing: 'border-box',
  backgroundColor: 'white',
  border: '2.5px solid black',
  fontFamily: textFont,
  fontWeight: vars.fontWeight.normal,
  borderRadius: vars.borderRadius['2x'],
  height: 48,
  margin: 'auto',
  textDecorationLine: 'none',
});

const settingButtonVariants = {
  size: {
    small: {
      fontSize: '16px',
      height: '24px',
      width: '60px',
      margin: '5px',
    },
    large: {
      fontSize: '28px',
      height: '48px',
      width: '250px',
      margin: '10px',
    },
  },
  colorStyle: {
    black: { color: vars.colors.black },
    navy: { color: vars.colors.white },
    red: { borderColor: vars.colors.red, color: vars.colors.red },
    gray: { borderColor: vars.colors.gray300, color: vars.colors.gray300 },
  },
  fill: {
    white: {
      backgroundColor: vars.colors.white,
    },
    gray: {
      backgroundColor: vars.colors.gray,
    },
    navy: {
      backgroundColor: vars.colors.navy,
    },
  },
};

export const settingButton = recipe({
  base: settingButtonBase,
  variants: settingButtonVariants,
});

export interface SettingButtonVariantsProps {
  size: keyof typeof settingButtonVariants.size;
  colorStyle: keyof typeof settingButtonVariants.colorStyle;
  fill: keyof typeof settingButtonVariants.fill;
}
