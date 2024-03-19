import * as constants from './constants';

type colorType = (typeof constants.BUTTON_COLOR)[number];

type coloredButtonSizeType = keyof typeof constants.COLORED_BUTTON_SIZE_PIXEL;

type coloredIconButtonSizeType =
  keyof typeof constants.COLOREDICONBUTTON_SIZE_PIXEL;

interface ColorButtonProps {
  text: string;
  color: colorType;
  onClick: () => void;
}
