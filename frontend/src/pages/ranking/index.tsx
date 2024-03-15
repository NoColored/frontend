import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index.tsx';

const Ranking = () => {
  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.rankingTitleWrapper}>
        <div className={styles.rankingTitleText}>RANKING</div>
      </div>
      <div className={styles.rankingWrapper}>
        <div className={styles.myRankingWrapper}>test</div>
      </div>

      <div />
    </BasicContentFrame>
  );
};

export default Ranking;
