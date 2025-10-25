import { Navigate } from 'react-router-dom';

import * as styles from './index.css';
import MemberSetting from './member-setting';

import { ROUTE } from '@/constants/routes';
import { useUserStatus } from '@/models/user';

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

  return <Navigate to={`${ROUTE.error}/404`} replace />;
};

export default Settings;
