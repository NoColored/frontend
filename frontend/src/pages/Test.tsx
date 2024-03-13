import RoundCornerImageBox from '@/components/RoundCornerImageBox/index.tsx';

export const Test = () => {
  const imgsrc = './public/images/landing-background-animation-h490w950.gif';
  return (
    <div>
      <RoundCornerImageBox
        size='large'
        borderLine='display'
        colorStyle='yellow'
        src={imgsrc}
        alt='배경'
      />
    </div>
  );
};
