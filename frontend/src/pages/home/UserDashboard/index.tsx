import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './index.css';

import TierBox from '@/components/imagebox/TierIconBox';
import type { tierType } from '@/components/imagebox/types';

interface Props {
  nickname: string;
  level: number;
  cp: number;
  maxCp: number;
  tier: tierType;
  rankScore: number;
}

const UserDashboard = ({
  nickname,
  level,
  cp,
  maxCp,

  tier,
}: Props) => {
  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.cpAndNicknameWrapper}>
        <div className={styles.nicknameAndLevelWrapper}>
          <div className={styles.nicknameText}>{nickname}</div>
          <div className={styles.levelText}>{`lv.${level}`}</div>
        </div>
        <div>
          <div className={styles.cpBarWrapper}>
            <div
              className={styles.cpBarGauge}
              style={assignInlineVars({
                [styles.cpBarWidth]: `${(cp / maxCp) * 100}%`,
              })}
            >
              <div className={styles.cpText}>
                {cp}/{maxCp}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.crossLine} />
      <TierBox tier={tier} size='small' />
    </div>
  );
};

export default UserDashboard;
