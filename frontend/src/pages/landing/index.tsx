import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton/index';

import { getGuestLogin } from '@/services/auth';

import { tokenState, nickNameState, userCodeState } from '@/states/auth';

const Landing = () => {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenState);
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [userCode, setUserCode] = useRecoilState(userCodeState);

  const clickGuestLogin = async () => {
    const guest = await getGuestLogin();
    if (guest) {
      setToken(guest.data.token);
      setNickName(guest.data.nickName);
      setUserCode(guest.data.userCode);
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
