import { useLoaderData, useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import { User } from '@/types/auth';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredIconButton from '@/components/button/ColoredIconButton';

import MatchingButton from '@/pages/play/mode/MatchingButton';
import RankingItemBox from '@/pages/ranking/RankingItemBox';

import { ROUTE } from '@/router/constants';

const Mode = () => {
  const navigate = useNavigate();
  const user = useLoaderData() as User;

  return (
    <BasicContentFrame backButtonLabel='뒤로'>
      <div className={styles.wrapper}>
        <ColoredIconButton
          icon={constants.FRIENDLY.icon}
          size='xlarge'
          text={constants.FRIENDLY.label}
          color={constants.FRIENDLY.color}
          onClick={() => {
            navigate(`${ROUTE.finder}`);
          }}
        />
        <MatchingButton imgSrc={user.skin} />
        <div className={styles.myRank}>
          <RankingItemBox player={user} guest={user.guest} myRank />
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Mode;
