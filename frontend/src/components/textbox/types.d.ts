import * as constants from './constants';

export interface LabeledTextboxProps {
  contentColor?: (typeof constants.TEXTBOX_COLOR)[number];
  labelColor?: (typeof constants.TEXTBOX_COLOR)[number];
  contentText: string;
  labelText: string;
}

export interface ColoredTextBoxProps {
  color: (typeof constants.BACKGROUND_COLOR)[number];
  text: string;
  icon?: string;
}
