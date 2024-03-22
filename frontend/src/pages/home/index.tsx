import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as styles from './index.css';
import SignupBanner from './SignupBanner';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';
import ColoredIconButton from '@/components/button/ColoredIconButton';
import type { tierType } from '@/components/imagebox/types';

import Error from '@/pages/error';
import UserDashboard from '@/pages/home/UserDashboard';

import { userState } from '@/states/auth';

const Home = () => {
  const User = useRecoilValue(userState);
  const navigate = useNavigate();
  const goCollection = () => {
    navigate('/collection');
  };
  const goRanking = () => {
    navigate('/ranking');
  };
  const goPlay = () => {
    navigate('/play');
  };

  if (User) {
    return (
      <BasicContentFrame>
        <div className={styles.fullWrapper}>
          <div className={styles.TopContentsWrapper}>
            <UserDashboard
              nickname={User.nickName}
              level={User.level}
              cp={User.exp}
              maxCp={User.exp}
              tier={User.tier as tierType}
              rankScore={User.rating}
            />
          </div>
          <div className={styles.BottomContentsWrapper}>
            <div className={styles.LeftButtonsWrapper}>
              <ColoredIconButton
                icon='/images/ui/icon/button/icon-button-collection-h50w50.png'
                size='medium'
                text='Collection'
                color='blue'
                onClick={goCollection}
              />
              <ColoredIconButton
                icon='/images/ui/icon/button/icon-button-ranking-h50w50.png'
                size='medium'
                text='Ranking'
                color='green'
                onClick={goRanking}
              />
            </div>

            <div
              style={{
                backgroundImage: `url(${User.skin})`,
              }}
              className={styles.CharacterBox}
            >
              <span className={styles.titleText}>{`< ${User.title} >`}</span>
            </div>
            <ColoredIconButton
              icon='/images/ui/icon/button/icon-button-ranking-h50w50.png'
              size='medium'
              text='Play'
              color='red'
              onClick={goPlay}
            />
          </div>
        </div>
        {User.guest && <SignupBanner />}
      </BasicContentFrame>
    );
  }
  return <Error />;
};

export default Home;
