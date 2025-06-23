import * as styles from './index.css';

import BasicContentFrame from '@/components/frame/WithButtons';

import AudioSetting from '@/pages/settings/AudioSetting';
import GuestUser from '@/pages/settings/GuestUser';
import LoginUser from '@/pages/settings/LoginUser';

import { GUEST, USER, useUserStateStore } from '@/states/user';

const Settings = () => {
  const { loginStatus } = useUserStateStore.getState();

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.centerBoxWrapper}>
        <div className={styles.title}>설정</div>
        <AudioSetting />
        {loginStatus === GUEST && <GuestUser />}
        {loginStatus === USER && <LoginUser />}
      </div>
    </BasicContentFrame>
  );
};

export default Settings;
