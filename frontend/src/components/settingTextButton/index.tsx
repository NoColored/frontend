import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './index.css.ts';
import { settingButton } from './index.css.ts';

interface Props {
  children: ReactNode;
  link?: string;
  onClick?: () => void;
}

const SettingTextButton = ({
  link,
  children,
  size,
  colorStyle,
  onClick,
}: Props & styles.ButtonVariantsProps) => {
  const navigate = useNavigate();
  if (link) {
    return (
      <button
        type='button'
        className={settingButton({ size, colorStyle })}
        onClick={() => navigate(link)}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type='button'
      className={settingButton({ size, colorStyle })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SettingTextButton;
