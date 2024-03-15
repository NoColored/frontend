import type { RoundCornerImageBoxProps } from './types.d.ts';

const RoundCornerImageBox = ({
  children,
  imgSrc,
  tier,
  size,
  borderColor,
  backgroundColor,
}: RoundCornerImageBoxProps) => {
  return (
    <div>
      tier ? (<div>tier</div>
      ) : (
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      />
      );
      {children}
    </div>
  );
};

export default RoundCornerImageBox;
