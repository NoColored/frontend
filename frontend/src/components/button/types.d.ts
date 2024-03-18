import * as type from './ColoredButton/constants';
import * as constants from './constants';

interface ColoredIconButtonProps {
  text: string;
  icon: string;
  color: (typeof constants.COLOREDICONBUTTON_COLOR)[number];
  size: (typeof constants.COLOREDICONBUTTON_SIZE)[number];
  onClick: () => void;
}

interface ColoredButtonProps {
  text: string;
  color: (typeof type.COLOR)[number];
  size: (typeof type.SIZE)[number];
  onClick: () => void;
}
