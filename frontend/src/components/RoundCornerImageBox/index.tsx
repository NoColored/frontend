import { imageBox } from '@/components/RoundCornerImageBox/index.css.ts';

interface Props {
  src: string;
  alt: string;
}

const RoundCornerImageBox = ({ src, alt }: Props) => {
  return (
    <div className={imageBox}>
      안녕
      <img src={src} alt={alt} />
    </div>
  );
};

export default RoundCornerImageBox;
