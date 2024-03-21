import React from 'react';

import * as styles from './index.css';

import type {
  imageboxBackgroundColorType,
  imageboxBorderColorType,
  imageboxSizeType,
  immageboxBorderWeightType,
} from '@/components/imagebox/types';

export interface Props {
  children?: React.ReactNode;
  imgSrc?: string;
  size: imageboxSizeType;
  borderSize?: immageboxBorderWeightType;
  borderColor?: imageboxBorderColorType;
  backgroundColor?: imageboxBackgroundColorType;
}

const RoundCornerImageBox = ({
  children,
  imgSrc,
  size,
  borderSize,
  borderColor,
  backgroundColor,
}: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
      className={styles.roundCornerImageBox({
        size,
        borderColor,
        borderSize,
        backgroundColor,
      })}
    >
      {children}
    </div>
  );
};

export default RoundCornerImageBox;
