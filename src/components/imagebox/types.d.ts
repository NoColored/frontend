import * as constants from '@/components/imagebox/constants';
import { IMAGEBOX_SIZE } from '@/components/imagebox/constants';

// imagebox
type imageboxSizeType = keyof typeof IMAGEBOX_SIZE;
type imageboxBorderColorType = (typeof constants.BORDER_COLOR)[number];
type immageboxBorderWeightType = (typeof constants.BORDER_WEIGHT)[number];
type imageboxBackgroundColorType = (typeof constants.BACKGROUND_COLOR)[number];
