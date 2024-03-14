import type { RoundCornerImageBoxProps } from './types.d.ts';

const RoundCornerImageBox = ({
  alt,
  imgSrc,
  tier,
  size,
}: RoundCornerImageBoxProps) => {
  return tier ? (
    <div>tier</div>
  ) : (
    <div
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    />
  );
};

export default RoundCornerImageBox;
