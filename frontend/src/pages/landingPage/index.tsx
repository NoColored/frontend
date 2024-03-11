import { etcWrapper, landingWrapper } from '@/pages/landingPage/index.css.ts';

const LandingPage = () => {
  const landingBackground: string =
    'url(/public/images/landing-background-animation-h490w950.gif)';
  const landingLogo: string =
    '/public/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div
      className={landingWrapper}
      style={{ backgroundImage: landingBackground }}
    >
      <div className={etcWrapper}>
        <img src={landingLogo} alt='로고로고' style={{ width: '45%' }} />
        {/* <div className={buttonWrapper}>/!* <Button></Button> *!/</div> */}
      </div>
    </div>
  );
};
export default LandingPage;
