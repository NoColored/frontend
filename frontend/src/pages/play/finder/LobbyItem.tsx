import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import * as styles from '@/pages/play/finder/index.css';

interface Props {
  imgSrc: string;
  lobbyTitle: string;
  playerCount: number;
}

const LobbyItem = ({ imgSrc, lobbyTitle, playerCount }: Props) => {
  return (
    <div className={styles.partyItemWrapper}>
      <RoundCornerImageBox size='full' imgSrc={imgSrc} />
      <div className={styles.textsWrapper}>
        <div className={styles.lobbyTitleText}>{lobbyTitle}</div>
        <div className={styles.playerCountText}>{`${playerCount}/4`}</div>
      </div>
    </div>
  );
};

export default LobbyItem;
