import * as style from './index.css.ts';

interface Props {
  src: string;
  alt: string;
  // TODO: add onClick
}
const SettingIconButton = ({ src, alt }: Props) => {
  return (
    <button type='button' className={style.button}>
      <img src={src} alt={alt} className={style.img} />
    </button>
  );
};

export default SettingIconButton;
