import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton/index';

import { getGuestLogin } from '@/services/auth';

import { userState } from '@/states/auth';

const Landing = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const clickGuestLogin = async () => {
    const data = await getGuestLogin();
    if (data) {
      setUser(data);
      navigate('/home');
      // 추후 수정 요망
      console.log(user);
    } else {
      console.log('Guest 로그인 실패');
      navigate('/*');
    }
  };

  const clickLogIn = () => {
    navigate('/login');
  };

  const landingLogo: string = '/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div className={styles.contentWrapper}>
      <img
        className={styles.logoImage}
        src={landingLogo}
        alt='NoColored Logo'
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='GUEST'
          color='gray300'
          size='large'
          onClick={clickGuestLogin}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={clickLogIn}
        />
      </div>
    </div>
  );
};

export default Landing;
