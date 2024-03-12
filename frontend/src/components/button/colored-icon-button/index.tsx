import * as styles from './index.css.ts';

interface ColoredIconButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const ColoredIconButton = ({ text, icon, onClick }: ColoredIconButtonProps) => {
  return (
    <button
      type='button'
      className={styles.coloredIconButton({ color: 'red' })}
      onClick={onClick}
    >
      <div>
        <img src={icon} alt={text} />
      </div>
      {text}
    </button>
  );
};

export default ColoredIconButton;
