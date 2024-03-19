import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';

import Index from '@/pages/play/lobby/Players/Index';

const Lobby = () => {
  return (
    <BasicContentFrame>
      <div className={styles.lobby}>
        <div className={styles.settings}>
          <div>코드번호</div>
          <div>비밀번호</div>
        </div>
        <div className={styles.lobbyInfo}>
          <div className={styles.lobbyTitle}>방제목최대9글자</div>
          <Index />
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Lobby;
