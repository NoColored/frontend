import * as styles from './index.css';

interface Props {
  achievements: Achievements[];
}

const AchievementMenu = ({ achievements }: Props) => {
  return (
    <div className={styles.achieveBoxWrapper}>
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={
            achievement.achieved ? styles.achievedBox : styles.notAchievedBox
          }
        >
          <div className={styles.boxStyle}>
            <div className={styles.nameSize}>{achievement.name}</div>
            <div className={styles.rewardSize}>{achievement.reward}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementMenu;
