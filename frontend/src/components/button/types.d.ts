import * as constants from './constants';

type colorType = (typeof constants.BUTTON_COLOR)[number];

type coloredButtonSizeType = (typeof constants.COLORED_BUTTON_SIZE)[number];

type coloredIconButtonSizeType =
  (typeof constants.COLORED_ICON_BUTTON_SIZE)[number];

interface ColorButtonProps {
  text: string;
  color: colorType;
  onClick: () => void;
}
