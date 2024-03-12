import { useNavigate } from 'react-router-dom';

import {
  settingButton,
  SettingButtonVariantsProps,
} from '@/components/settingTextButton/index.css.ts';

interface ButtonProps {
  link?: string;
  onClick?: () => void;
  // type: 'submit' | 'reset' | 'button';
}

const SettingTextButton = ({
  link,
  onClick,
  size,
  colorStyle,
  fill,
}: ButtonProps & SettingButtonVariantsProps) => {
  const navigate = useNavigate();
  if (link) {
    return (
      <div>
        <button
          type='button'
          onClick={() => navigate(link)}
          className={settingButton({ size, colorStyle, fill })}
        >
          on
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        type='button'
        className={settingButton({ size, colorStyle, fill })}
        onClick={onClick}
      >
        on
      </button>
    </div>
  );
};

export default SettingTextButton;
