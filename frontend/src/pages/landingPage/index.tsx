import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

import { landingBox } from '@/pages/landingPage/index.css.ts';
import LogoBox from '@/pages/landingPage/logoBox.tsx';

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
