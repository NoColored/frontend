import { landingBox } from '@/pages/landingPage/index.css.ts';
import LogoBox from '@/pages/landingPage/logoBox.tsx';

const LandingPage = () => {
  return (
    <div className={landingBox}>
      <LogoBox />
    </div>
  );
};
export default LandingPage;
