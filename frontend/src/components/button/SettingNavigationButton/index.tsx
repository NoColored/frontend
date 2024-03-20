import * as styles from './index.css';

import type { positionType } from '@/components/button/types';

interface Props {
  label: string;
  onClick: () => void;
  position: positionType;
}

const buttonLabel = (label: string, position: positionType) => {
  if (position == 'leftTop') {
    return `< ${label}`;
  }
  return `${label} X`;
};

const SettingNavigationButton = ({ label, onClick, position }: Props) => {
  return (
    <button
      type='button'
      className={styles.button({ position })}
      onClick={onClick}
    >
      {buttonLabel(label, position)}
    </button>
  );
};

export default SettingNavigationButton;
