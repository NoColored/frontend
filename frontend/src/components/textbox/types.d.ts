import * as constants from './constants.ts';

export interface labeledtextboxProps {
  titleColor?: (typeof constants.TEXTBOX_COLOR)[number];
  labelColor?: (typeof constants.TEXTBOX_COLOR)[number];
  titleText: string;
  labelText: string;
}

export interface coloredTextBoxProps {
  color: (typeof constants.BACKGROUND_COLOR)[number];
  text: string;
  icon?: string;
}
