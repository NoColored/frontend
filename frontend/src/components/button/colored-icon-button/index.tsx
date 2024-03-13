import * as styles from './index.css.ts';

import { ColorButtonColors } from '@/components/button/ButtonTypes.ts';

interface ColoredIconButtonProps {
  icon: string;
  text: string;
  color: ColorButtonColors['color'];
  onClick?: () => void;
}

const ColoredIconButton = ({
  text,
  icon,
  color,
  onClick,
}: ColoredIconButtonProps) => {
  return (
    <button
      type='button'
      className={styles.coloredIconButtonStyle({ color })}
      onClick={onClick}
    >
      <img src={icon} alt={text} />
      {text}
    </button>
  );
};

export default ColoredIconButton;
