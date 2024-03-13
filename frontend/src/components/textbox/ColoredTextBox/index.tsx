import * as styles from './index.css.ts';

interface ColoredTextBoxProps {
  color: string;
  text: string;
  icon?: string;
}

const ColoredTextBox = ({ color, text, icon }: ColoredTextBoxProps) => {
  return (
    <div className={styles.coloredTextBoxStyle({ color })}>
      {icon ? <img className={styles.iconStyle} src={icon} alt='icon' /> : null}
      {text}
    </div>
  );
};

export default ColoredTextBox;
