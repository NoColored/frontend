import React from 'react';

import { inputTextBox } from '@/components/textbox/InputTextBox/index.css.ts';

interface Props {
  placeholder: string;
  size: 'small' | 'medium' | 'large';
  type: 'text' | 'number' | 'password';
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextBox = ({ placeholder, size, type, value, onChange }: Props) => {
  const sizeName = inputTextBox({ size });
  return (
    <input
      type={type}
      className={sizeName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTextBox;
