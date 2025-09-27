import * as styles from './index.css';

import BasicContentFrame from '@/components/frame/with-buttons';

import LoginUser from '@/pages/settings/LoginUser';

import { useUserStatus } from '@/features/user';

const Settings = () => {
  const { isMember } = useUserStatus();

  return (
    <BasicContentFrame leftButton={{ label: '뒤로' }}>
      {isMember && (
        <div className={styles.centerBoxWrapper}>
          <div className={styles.title}>계정 설정</div>
          <LoginUser />
        </div>
      )}
    </BasicContentFrame>
  );
};

export default Settings;
