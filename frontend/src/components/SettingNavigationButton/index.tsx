import * as style from './index.css.ts';

interface Props {
  label: string;
}

const SettingNavigationButton = ({ label }: Props) => {
  const text = `< ${label}`;
  return (
    <button type='button' className={style.button}>
      {text}
    </button>
  );
};

export default SettingNavigationButton;
