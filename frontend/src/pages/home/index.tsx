import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import * as styles from './index.css';
import SignupBanner from './SignupBanner';

import type { User } from '@/types/auth';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';
import ColoredIconButton from '@/components/button/ColoredIconButton';
import type { tierType } from '@/components/imagebox/types';

import Error from '@/pages/error';
import UserDashboard from '@/pages/home/UserDashboard';

import { useUserStateStore } from '@/states/user';

const Home = () => {
  const user = useLoaderData() as User;
  console.log(user);
  const setGuest = useUserStateStore((state) => state.setGuest);

  useEffect(() => {
    if (user.guest) {
      setGuest();
    }
  }, [user.guest, setGuest]);

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

  if (!user) {
    return <Error />;
  }
  return (
    <BasicContentFrame>
      <div className={styles.fullWrapper}>
        <div className={styles.TopContentsWrapper}>
          <UserDashboard
            nickname={user.nickname}
            level={user.level}
            cp={user.exp}
            maxCp={user.exp}
            tier={user.tier as tierType}
            rankScore={user.rating}
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
              backgroundImage: `url(${user.skin})`,
            }}
            className={styles.CharacterBox}
          >
            <span className={styles.titleText}>{`< ${user.title} >`}</span>
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
      {user.guest && <SignupBanner isGuest={user.guest} />}
    </BasicContentFrame>
  );
};

export default Home;
