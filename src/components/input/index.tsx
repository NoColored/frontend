import { styles } from './index.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ChangeEvent } from 'react';

type Props = {
  name?: string;
  placeholder: string;
  type: 'text' | 'password';
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & Required<NonNullable<RecipeVariants<typeof styles.input>>>;

const Input = ({ name, placeholder, size, type, value, onChange }: Props) => {
  return (
    <input
      name={name}
      type={type}
      className={styles.input({ size })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
