import { textboxColor } from './textbox-data.ts';

interface labeledtextboxProps {
  titleColor?: (typeof textboxColor)[number];
  labelColor?: (typeof textboxColor)[number];
  titleText: string;
  labelText: string;
}
