import type { settingTextButtonColorType } from '@/components/button/types';

export const CENTER_PLACE = {
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
};

export const SETTING_TYPE = [
  'nickname',
  'logout',
  'pwdchange',
  'signout',
  'signup',
] as const;

export const AUDIO_SIZE = {
  box: {
    width: '434px',
    height: '72px',
    top: '17px',
  },
  text: {
    top: -17,
    left: 30,
  },
} as const;

export const SETTING_TEXT_BUTTON_COLORS = [
  'black',
  'navy',
  'red',
  'gray',
] as settingTextButtonColorType[];
