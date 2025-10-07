import React from 'react';

import { input } from '@/components/input/index.css';
import { inputSizeType } from '@/components/input/types';

interface Props {
  name?: string;
  placeholder: string;
  size: inputSizeType;
  type: 'text' | 'password';
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, placeholder, size, type, value, onChange }: Props) => {
  const sizeName = input({ size });
  return (
    <input
      name={name}
      type={type}
      className={sizeName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
