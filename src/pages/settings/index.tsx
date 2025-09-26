import * as styles from './index.css';

import BasicContentFrame from '@/components/frame/with-buttons';

import AudioSetting from '@/pages/settings/AudioSetting';
import GuestUser from '@/pages/settings/GuestUser';
import LoginUser from '@/pages/settings/LoginUser';

import { USER_STATUS, useUserStore } from '@/features/user';

const Settings = () => {
  const { loginStatus } = useUserStore.getState();

  return (
    <BasicContentFrame leftButton={{ label: '뒤로' }}>
      <div className={styles.centerBoxWrapper}>
        <div className={styles.title}>설정</div>
        <AudioSetting />
        {loginStatus === USER_STATUS.guest && <GuestUser />}
        {loginStatus === USER_STATUS.member && <LoginUser />}
      </div>
    </BasicContentFrame>
  );
};

export default Settings;
