import { Outlet } from 'react-router-dom';

import * as styles from './index.css';

import BasicContentFrame from '@/components/frame/index';

import { useUserStateStore } from '@/states/user';

const LandingLayout = () => {
  useUserStateStore.getState().setLogout();

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
