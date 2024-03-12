// import * as styles from './index.css.ts';

import { coloredButtonStyleCss } from '@/components/button/coloredButtonStyle.css.ts';

interface ColoredIconButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const ColoredIconButton = ({ text, icon, onClick }: ColoredIconButtonProps) => {
  return (
    <button
      type='button'
      className={coloredButtonStyleCss({ colors: 'red' })}
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
