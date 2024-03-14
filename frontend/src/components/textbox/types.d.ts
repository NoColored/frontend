import { textboxColor } from './constants.ts';

interface labeledtextboxProps {
  titleColor?: (typeof textboxColor)[number];
  labelColor?: (typeof textboxColor)[number];
  titleText: string;
  labelText: string;
}
