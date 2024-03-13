import * as styles from './index.css.ts';

interface Props {
  src: string;
  alt: string;
  // TODO: add onClick
}
const SettingIconButton = ({ src, alt }: Props) => {
  return (
    <button type='button' className={styles.button}>
      <img src={src} alt={alt} className={styles.img} />
    </button>
  );
};

export default SettingIconButton;
