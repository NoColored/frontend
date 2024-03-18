import * as styles from './index.css';

import type { RoundCornerImageBoxProps } from '../types.d';

const RoundCornerImageBox = ({
  children,
  imgSrc,
  size,
  borderSize,
  borderColor,
  backgroundColor,
}: RoundCornerImageBoxProps) => {
  return (
    <div
      id='roundCornerImageBox'
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
