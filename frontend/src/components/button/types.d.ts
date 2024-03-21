import * as constants from './constants';

import * as styles from '@/components/button/SettingNavigationButton/index.css';

type colorType = (typeof constants.BUTTON_COLOR)[number];

type coloredButtonSizeType = keyof typeof constants.COLORED_BUTTON_SIZE_PIXEL;

type coloredIconButtonSizeType =
  keyof typeof constants.COLOREDICONBUTTON_SIZE_PIXEL;

type positionType = keyof typeof styles.positionVariants;

interface ColorButtonProps {
  text: string;
  color: colorType;
  onClick: () => void;
}
