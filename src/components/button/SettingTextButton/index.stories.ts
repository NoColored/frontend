import { fn } from 'storybook/test';

import { buttonVariants } from './index.css';

import SettingTextButton from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Button/SettingTextButton',
  component: SettingTextButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    colorStyle: {
      control: 'radio',
      options: Object.keys(buttonVariants.colorStyle),
    },
    size: {
      control: 'radio',
      options: Object.keys(buttonVariants.size),
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof SettingTextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    size: 'large',
    colorStyle: 'black',
    children: '게임 정보',
    disabled: false,
  },
};

export const Red: Story = {
  args: {
    size: 'large',
    colorStyle: 'red',
    children: '회원 탈퇴',
    disabled: false,
  },
};
