import * as styles from './index.css.ts';

interface ColoredIconButtonProps {
  icon: string;
  text: string;
  color: string;
  size: 'medium' | 'large' | 'xlarge';
  onClick?: () => void;
}

const ColoredIconButton = ({
  text,
  icon,
  color,
  size,
  onClick,
}: ColoredIconButtonProps) => {
  return (
    <button
      type='button'
      className={styles.coloredIconButtonStyle({ color, size })}
      onClick={onClick}
    >
      <img className={styles.iconStyle} src={icon} alt={text} />
      <span className={styles.textStyle}>{text}</span>
    </button>
  );
};

export default ColoredIconButton;
