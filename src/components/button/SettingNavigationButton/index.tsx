import { type RecipeVariants } from '@vanilla-extract/recipes';

import * as styles from './index.css';

import useEffectSoundStore from '@/states/effect';

type Props = {
  label: string;
  onClick: () => void;
} & RecipeVariants<typeof styles.button>;

const SettingNavigationButton = ({
  label,
  onClick,
  position,
  usage = 'modal',
}: Props) => {
  const { playEffectSound } = useEffectSoundStore();

  const handleClick = () => {
    playEffectSound();
    onClick();
  };

  return (
    <button
      type='button'
      className={styles.button({ position, usage })}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default SettingNavigationButton;
