import { Outlet } from 'react-router-dom';

import * as styles from './index.css';

import BasicContentFrame from '@/components/frame/index';

import FullscreenPrompt from '@/pages/landing/FullScreenPrompt';

import { useUserStateStore } from '@/states/user';

const LandingLayout = () => {
  useUserStateStore.getState().setLogout();

  return (
    <>
      <FullscreenPrompt />
      <BasicContentFrame>
        <div className={styles.landingWrapper}>
          <Outlet />
          <span className={styles.clickMessage}>click to start!</span>
        </div>
      </BasicContentFrame>
    </>
  );
};
export default LandingLayout;
