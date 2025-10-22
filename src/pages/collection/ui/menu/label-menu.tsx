import { useCollectionActions } from '../../hooks';
import * as styles from './index.css';

const LabelMenu = ({ labels }: { labels: Labels[] }) => {
  const { setSelectedLabel } = useCollectionActions();

  return (
    <div className={styles.achieveBoxWrapper}>
      {labels.map((label) => (
        <button
          type='button'
          key={label.id}
          onClick={() => setSelectedLabel(label)}
          className={label.own ? styles.achievedBox : styles.notAchievedBox}
        >
          <div className={styles.labelBoxStyle}>
            <div className={styles.nameSize}>{label.name}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default LabelMenu;
