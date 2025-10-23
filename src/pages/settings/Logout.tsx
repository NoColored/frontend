import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

import { useLogout } from '@/features/user';

interface Props {
  onClose: () => void;
}

const Logout = ({ onClose }: Props) => {
  const { logout } = useLogout();

  return (
    <div className={styles.centerBoxWrapper}>
      <div className={styles.text}>로그아웃 하시겠습니까?</div>
      <br />
      <div className={styles.text}>그럼에도 당신의 점프는</div>
      <div className={styles.text}>영원히 기억됩니다.</div>
      <br />
      <div className={styles.buttonWrapper}>
        <ColoredButton size='small' text='확인' color='navy' onClick={logout} />
        <ColoredButton
          size='small'
          text='취소'
          color='gray300'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Logout;
