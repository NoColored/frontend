import { useState } from 'react';
import { fn } from 'storybook/test';

import Input from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { INPUT_TEXT_BOX_SIZE } from '@/components/input/constants';

const meta = {
  title: 'components/input',
  component: Input,
  parameters: {
    layout: 'centered',
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
      options: Object.keys(INPUT_TEXT_BOX_SIZE),
      description: '인풋 박스 크기',
    },
    type: {
      control: 'radio',
      options: ['text', 'password'],
      description: '인풋 타입',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 텍스트',
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
    placeholder: 'example',
    size: 'medium',
    type: 'text',
  },
  render: (args) => {
    const [text, setText] = useState('');

    return (
      <Input
        {...args}
        placeholder='입력하세요'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    );
  },
};

export const Login: Story = {
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

export const Signup: Story = {
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

export const Account: Story = {
  args: {
    placeholder: 'account-input',
    size: 'small',
    type: 'text',
  },
  render: (args) => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    return (
      <>
        <Input
          {...args}
          placeholder='수정할 닉네임을 입력하세요 (2~9자리)'
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Input
          {...args}
          placeholder='현재 비밀번호 숫자 6자리를 입력하세요'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </>
    );
  },
};
