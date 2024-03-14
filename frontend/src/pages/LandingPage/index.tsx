import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

import { landingBox } from '@/pages/LandingPage/index.css.ts';
import LogoBox from '@/pages/LandingPage/logoBox.tsx';

const LandingPage = () => {
  return (
    <BasicContentFrame>
      <div className={landingBox}>
        <LogoBox />
      </div>
    </BasicContentFrame>
  );
};
export default LandingPage;
