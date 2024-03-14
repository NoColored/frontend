import * as constants from './constants.ts';

interface ColoredIconButtonProps {
  text: string;
  icon: string;
  color: (typeof constants.COLOREDICONBUTTON_COLOR)[number];
  size: (typeof constants.COLOREDICONBUTTON_SIZE)[number];
  onClick: () => void;
}
