import * as styles from './index.css';
import MemberSetting from './member-setting';

import { useUserStatus } from '@/features/user';

const Settings = () => {
  const { isMember } = useUserStatus();

  if (isMember) {
    return (
      <div className={styles.centerBoxWrapper}>
        <div className={styles.title}>계정 설정</div>
        <MemberSetting />
      </div>
    );
  }

  return null;
};

export default Settings;
