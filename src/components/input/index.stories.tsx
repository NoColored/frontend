import { useState } from 'react';
import { fn } from 'storybook/test';

import { size } from './index.css';

import Input from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['name'] },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: Object.keys(size).filter((key) => key !== 'widthFull'),
    },
    type: {
      control: 'radio',
      options: ['text', 'password'],
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: false,
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '입력하세요',
    size: 'small',
    type: 'text',
  },
  render: (args) => {
    const [text, setText] = useState('');

    return (
      <Input {...args} value={text} onChange={(e) => setText(e.target.value)} />
    );
  },
};

export const LogIn: Story = {
  argTypes: {
    placeholder: {
      control: false,
    },
    type: {
      control: false,
    },
  },
  args: {
    placeholder: 'login-input',
    size: 'large',
    type: 'text',
  },
  render: (args) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
      <>
        <Input
          {...args}
          placeholder='아이디'
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          {...args}
          placeholder='비밀번호'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </>
    );
  },
};

export const SignUp: Story = {
  argTypes: {
    placeholder: {
      control: false,
    },
    type: {
      control: false,
    },
  },
  args: {
    placeholder: 'signup-input',
    size: 'medium',
    type: 'text',
  },
  render: (args) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [checkPw, setCheckPw] = useState('');
    const [nickname, setNickname] = useState('');

    return (
      <>
        <Input
          {...args}
          placeholder='아이디 (최소 6자 ~ 20자)'
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          {...args}
          placeholder='비밀번호 (숫자 6자)'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          {...args}
          placeholder='비밀번호 확인'
          type='password'
          value={checkPw}
          onChange={(e) => setCheckPw(e.target.value)}
        />
        <Input
          {...args}
          placeholder='닉네임 (최소 2자 ~ 9자)'
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </>
    );
  },
};
