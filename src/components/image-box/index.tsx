import React from 'react';

import * as styles from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

type StyleProps = NonNullable<
  RecipeVariants<typeof styles.roundCornerImageBox>
>;

type Props = {
  children?: React.ReactNode;
  imgSrc: string;
  alt?: string;
} & Required<Pick<StyleProps, 'size'>> &
  Omit<StyleProps, 'size'>;

const RoundCornerImageBox = ({
  children,
  imgSrc,
  alt,
  size,
  borderSize,
  borderColor,
  backgroundColor,
}: Props) => {
  return (
    <div
      className={styles.roundCornerImageBox({
        size,
        borderColor,
        borderSize,
        backgroundColor,
      })}
    >
      {imgSrc && <img className={styles.image} src={imgSrc} alt={alt} />}
      {children && <div className={styles.contents}>{children}</div>}
    </div>
  );
};

export default RoundCornerImageBox;
