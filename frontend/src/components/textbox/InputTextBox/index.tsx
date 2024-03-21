import React from 'react';

import { inputTextBox } from '@/components/textbox/InputTextBox/index.css';

import {
  inputSizeType,
  inputType,
} from '@/components/textbox/InputTextBox/types';

interface Props {
  placeholder: string;
  size: inputSizeType;
  type: inputType;
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
