import {
  buttonBox,
  clickText,
  logoBox,
} from '@/pages/landingPage/index.css.ts';

const LogoBox = () => {
  const landingLogo: string =
    '/public/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div className={logoBox}>
      <img src={landingLogo} alt='로고로고' style={{ width: '50%' }} />
      <div className={buttonBox}>
        비회원/회원 로그인 버튼 추가하기 - 공통 컴포넌트
      </div>
      <span className={clickText}>click to start!</span>
    </div>
  );
};

export default LogoBox;
