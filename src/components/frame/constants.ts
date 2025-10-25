import { IPHONE_14_PRO_MAX, IPHONE_SE } from '@/shared/constants';
import { vars } from '@/shared/styles';

export const FRAME_STYLE = {
  width: {
    max: IPHONE_14_PRO_MAX.width,
    min: IPHONE_SE.width,
  },
  height: {
    max: IPHONE_14_PRO_MAX.height,
    min: IPHONE_SE.height,
  },
  padding: vars.space['4x'],
};
