import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

interface Props {
  onClose: () => void;
}

const Logout = ({ onClose }: Props) => {
  const navigate = useNavigate();

  const removeToken = () => {
    window.localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={styles.centerBoxWrapper}>
      <div className={styles.text}>로그아웃 하시겠습니까?</div>
      <br />
      <div className={styles.text}>그럼에도 당신의 점프는</div>
      <div className={styles.text}>영원히 기억됩니다.</div>
      <br />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          size='small'
          text='확인'
          color='navy'
          onClick={removeToken}
        />
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
