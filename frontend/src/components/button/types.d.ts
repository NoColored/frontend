import * as constants from './constants';

import { positionVariants } from '@/components/button/SettingNavigationButton/index.css';
import { buttonVariants } from '@/components/button/SettingTextButton/index.css';

type colorType = (typeof constants.BUTTON_COLOR)[number];

type coloredButtonSizeType = keyof typeof constants.COLORED_BUTTON_SIZE_PIXEL;

type coloredIconButtonSizeType =
  keyof typeof constants.COLOREDICONBUTTON_SIZE_PIXEL;

type positionType = keyof typeof positionVariants;

interface ColorButtonProps {
  text: string;
  color: colorType;
  onClick: () => void;
}

type settingTextButtonColorType = keyof typeof buttonVariants.colorStyle;
