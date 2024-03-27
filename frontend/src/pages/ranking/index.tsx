import * as styles from './index.css';

import { User } from '@/types/auth';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';

import RankingItemBox from '@/pages/ranking/RankingItemBox';

// 받아와서 map으로 돌려줘야됨
const rankingExample: User[] = [
  {
    rank: 1,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 2,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 3,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 4,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 5,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 650,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 7777,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
  {
    rank: 90,
    skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
    label: '칭호인데요제발요칭호라고요열네자?',
    nickname: '닉네임은아홉글자일',
    tier: 'diamond',
    rating: 9999,
  } as User,
];

// guest일때는 isguest가 true일때 랭킹이 안보이도록 값에다 설정해주면 될듯 'string'으로 처리됨.

const Ranking = () => {
  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.rankingFullWrapper}>
        <div className={styles.rankingTitleWrapper}>
          <div className={styles.rankingTitleText}>RANKING</div>
        </div>

        <div className={styles.rankingWrapper}>
          {rankingExample.map((user) => (
            <RankingItemBox user={user} key={user.rank} />
          ))}
        </div>
        <RankingItemBox
          user={
            {
              rank: 10000,
              skin: '/images/character/default-magichat/character-default-magichat-blue-h240w240.png',
              label: '내칭호가들어가는데요',
              nickname: '수원왕갈비통닭임',
              tier: 'origin',
              rating: 129,
            } as User
          }
          myRank
        />
      </div>
    </BasicContentFrame>
  );
};

export default Ranking;
