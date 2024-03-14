import { useNavigate } from 'react-router-dom';

import ColoredButton from '@/components/button/ColoredButton-Temp/index.tsx';

import {
  buttonBox,
  clickText,
  logoBox,
} from '@/pages/LandingPage/index.css.ts';

const LogoBox = () => {
  const navigate = useNavigate();
  const landingLogo: string =
    '/public/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div className={logoBox}>
      <img src={landingLogo} alt='로고로고' style={{ width: '50%' }} />
      <div className={buttonBox}>
        <ColoredButton
          text='GUEST'
          color='gray300'
          size='large'
          onClick={() => navigate('/')}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={() => navigate('/')}
        />
      </div>
      <span className={clickText}>click to start!</span>
    </div>
  );
};

export default LogoBox;
