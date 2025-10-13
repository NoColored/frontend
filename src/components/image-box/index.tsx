import React from 'react';

import * as styles from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type StyleProps = NonNullable<
  RecipeVariants<typeof styles.roundCornerImageBox>
>;

type Props = {
  children?: React.ReactNode;
  imgSrc: string;
} & Required<Pick<StyleProps, 'size'>> &
  Omit<StyleProps, 'size'>;

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
