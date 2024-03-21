import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import Players from '@/pages/play/lobby/Players';
import SettingButton from '@/pages/play/lobby/SettingButton';

const Lobby = () => {
  const code = '1234';
  const password = '1234';

  return (
    <BasicContentFrame backButtonLabel='나가기'>
      <div className={styles.lobby}>
        <div className={styles.settings}>
          <SettingButton />
          <div className={styles.code}>{code}</div>
          <ColoredTextBox size='small' color='red' text='코드번호' />
          <div className={styles.code}>{password}</div>
          <ColoredTextBox size='small' color='red' text='비밀번호' />
        </div>
        <div className={styles.lobbyInfo}>
          <div className={styles.lobbyTitle}>방제목최대9글자</div>
          <Players />
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Lobby;
