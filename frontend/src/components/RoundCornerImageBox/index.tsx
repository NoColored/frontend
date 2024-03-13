import { image, ImageBoxVariantsProps, settingBox } from './index.css.ts';

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
  backgroundStyle,
}: Props & ImageBoxVariantsProps) => {
  return (
    <div
      className={settingBox({
        size,
        colorStyle,
        borderLine,
        backgroundStyle,
      })}
    >
      <img src={src} alt={alt} className={image} />
    </div>
  );
};

export default RoundCornerImageBox;
