import * as styles from './index.css';

interface Props {
  label: string;
  onClick: () => void;
}

const SettingNavigationButton = ({ label, onClick }: Props) => {
  const text = `< ${label}`;
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default SettingNavigationButton;
