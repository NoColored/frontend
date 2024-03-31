import { Outlet } from 'react-router-dom';

import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/index';

import FullscreenPrompt from '@/pages/landing/FullScreenPrompt';

const LandingLayout = () => {
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
