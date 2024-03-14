import { Outlet } from 'react-router-dom';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

import { landingBox } from '@/pages/landing/index.css.ts';

const LandingLayout = () => {
  return (
    <BasicContentFrame>
      <div className={landingBox}>
        <Outlet />
      </div>
    </BasicContentFrame>
  );
};
export default LandingLayout;
