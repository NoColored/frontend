import * as styles from './index.css.ts';

interface Props {
  text: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const ColoredButton = ({ text, color, size, onClick }: Props) => {
  return (
    <button
      type='button'
      className={styles.coloredButtonStyle({ color, size })}
      onClick={onClick}
    >
      <span className={styles.textStyle}>{text}</span>
    </button>
  );
};

export default ColoredButton;
