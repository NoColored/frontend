import { Outlet } from 'react-router-dom';

import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

const LandingLayout = () => {
  return (
    <BasicContentFrame>
      <div className={styles.landingBox}>
        <Outlet />
      </div>
    </BasicContentFrame>
  );
};
export default LandingLayout;
