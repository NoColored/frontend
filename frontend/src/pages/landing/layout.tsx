import { Outlet } from 'react-router-dom';

import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

const LandingLayout = () => {
  return (
    <BasicContentFrame>
      <div className={styles.landingWrapper}>
        <Outlet />
        <span className={styles.clickText}>click to start!</span>
      </div>
    </BasicContentFrame>
  );
};
export default LandingLayout;
