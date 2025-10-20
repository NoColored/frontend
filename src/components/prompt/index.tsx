import * as styles from './index.css';

const FullscreenPrompt = () => {
  return (
    <div className={styles.fullscreenPromptStyle}>
      <p className={styles.fullscreenPromptText}>!! 주의 !!</p>
      <p className={styles.fullscreenPromptText}>{'<가로 모드>를'}</p>
      <p className={styles.fullscreenPromptText}>장착하세요!</p>
    </div>
  );
};

export default FullscreenPrompt;
