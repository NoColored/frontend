import * as styles from './index.css.ts';

import type { RoundCornerImageBoxProps } from './types.d.ts';

const RoundCornerImageBox = ({
  children,
  imgSrc,
  tier,
  size,
  borderSize,
  borderColor,
  backgroundColor,
}: RoundCornerImageBoxProps) => {
  return (
    <div>
      {tier ? (
        <div
          className={styles.roundCornerImageBox({
            size,
            tier,
            borderSize,
            borderColor,
            backgroundColor,
          })}
        >
          {children}
        </div>
      ) : (
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
        />
      )}
      {children}
    </div>
  );
};

export default RoundCornerImageBox;
