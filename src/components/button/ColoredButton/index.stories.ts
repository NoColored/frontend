import { fn } from 'storybook/test';

import { sizeVariants } from './index.css';

import ColoredButton from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { BUTTON_COLOR } from '@/components/button/constants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Button/ColoredButton',
  component: ColoredButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: 'radio',
      options: BUTTON_COLOR,
    },
    size: {
      control: 'radio',
      options: Object.keys(sizeVariants),
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof ColoredButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    size: 'small',
    color: 'green',
    text: '확인',
  },
};

export const Gray: Story = {
  args: {
    size: 'small',
    color: 'gray300',
    text: '취소',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'pink',
    text: 'LOG IN',
  },
};
