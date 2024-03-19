import { Outlet } from 'react-router-dom';

import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/index';

const LandingLayout = () => {
  return (
    <BasicContentFrame>
      <div className={styles.landingWrapper}>
        <Outlet />
        <span className={styles.clickMessage}>click to start!</span>
      </div>
    </BasicContentFrame>
  );
};
export default LandingLayout;
