import React from 'react';

import { inputTextBox } from '@/components/inputBox/inputTextBox/inputTextBox.css.ts';

interface Props {
  placeholder: string;
  size: 'small' | 'medium' | 'large';
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextBox = ({ placeholder, size, value, onChange }: Props) => {
  const sizeName = inputTextBox({ size });
  return (
    <input
      type='text'
      className={sizeName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTextBox;
