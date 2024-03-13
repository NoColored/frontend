import * as styles from './index.css.ts';
import { ImageBoxVariantsProps, settingBox } from './index.css.ts';

interface Props {
  src: string;
  alt: string;
}

const RoundCornerImageBox = ({
  src,
  alt,
  size,
  colorStyle,
  borderLine,
}: Props & ImageBoxVariantsProps) => {
  return (
    <div className={settingBox({ size, colorStyle, borderLine })}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

export default RoundCornerImageBox;
