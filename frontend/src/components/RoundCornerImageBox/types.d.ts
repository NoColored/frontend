import * as constants from '@/components/RoundCornerImageBox/constants.ts';
import { TIER_RANGE } from '@/components/RoundCornerImageBox/constants.ts';

interface RoundCornerImageBoxProps {
  size: (typeof constants.ROUNDCORNER_IMAGEBOX_SIZE)[number];
  imgSrc?: string;
  alt?: string;
  tier?: (typeof constants.TIER_RANGE)[number];
  borderColor?: string;
  backgroundColor?: string;
}
