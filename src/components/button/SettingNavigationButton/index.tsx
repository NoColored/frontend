import * as styles from './index.css';

import type { positionType } from '@/components/button/types';

import useEffectSoundStore from '@/states/effect';

interface Props {
  label: string;
  onClick: () => void;
  position: positionType;
}

const SettingNavigationButton = ({ label, onClick, position }: Props) => {
  const { playEffectSound } = useEffectSoundStore();

  const handleClick = () => {
    playEffectSound();
    onClick();
  };

  return (
    <button
      type='button'
      className={styles.button({ position })}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default SettingNavigationButton;
