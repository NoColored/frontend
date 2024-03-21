import * as styles from './index.css';
import SignupBanner from './SignupBanner';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';
import ColoredIconButton from '@/components/button/ColoredIconButton';
import type { tierType } from '@/components/imagebox/types';

import UserDashboard from '@/pages/home/UserDashboard';

const Home = () => {
  const UserInfoTemp = {
    title: '칭호는무엇일까요우',
    nickname: '테스트중인노컬러드',
    level: 15,
    cp: 2000,
    maxCp: 3000,
    tier: 'diamond' as tierType,
    rankScore: 999,
    skinSrc:
      '/images/character/google-none/character-google-none-green-h240w240.png',
  };

  return (
    <BasicContentFrame>
      <div className={styles.fullWrapper}>
        <div className={styles.TopContentsWrapper}>
          <UserDashboard
            nickname={UserInfoTemp.nickname}
            level={UserInfoTemp.level}
            cp={UserInfoTemp.cp}
            maxCp={UserInfoTemp.maxCp}
            tier={UserInfoTemp.tier}
            rankScore={UserInfoTemp.rankScore}
          />
        </div>
        <div className={styles.BottomContentsWrapper}>
          <div className={styles.LeftButtonsWrapper}>
            <ColoredIconButton
              icon='/images/ui/icon/button/icon-button-collection-h50w50.png'
              size='medium'
              text='Collection'
              color='blue'
              onClick={() => {}}
            />
            <ColoredIconButton
              icon='/images/ui/icon/button/icon-button-ranking-h50w50.png'
              size='medium'
              text='Ranking'
              color='green'
              onClick={() => {}}
            />
          </div>

          <div
            style={{
              backgroundImage: `url(${UserInfoTemp.skinSrc})`,
            }}
            className={styles.CharacterBox}
          >
            <span
              className={styles.titleText}
            >{`< ${UserInfoTemp.title} >`}</span>
          </div>
          <ColoredIconButton
            icon='/images/ui/icon/button/icon-button-ranking-h50w50.png'
            size='medium'
            text='Play'
            color='red'
            onClick={() => {}}
          />
        </div>
      </div>
      <SignupBanner />
    </BasicContentFrame>
  );
};

export default Home;
