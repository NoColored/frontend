import React from 'react';

import * as styles from './index.css.ts';

interface Props {
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SettingIconButton = ({ src, alt, onClick }: Props) => {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      <img src={src} alt={alt} className={styles.img} />
    </button>
  );
};

export default SettingIconButton;
