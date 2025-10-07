import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ColoredIconButton from '@/components/button/ColoredIconButton/index';
import { sizeVariants } from '@/components/button/ColoredIconButton/index.css';
import { BUTTON_COLOR } from '@/components/button/constants';

const meta = {
  title: 'components/Button/ColoredIconButton',
  component: ColoredIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
  args: { onClick: fn() },
} satisfies Meta<typeof ColoredIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    size: 'large',
    color: 'green',
    icon: '/images/ui/icon/button/icon-button-play-h50w50.png',
    text: 'play',
  },
};

export const Gray: Story = {
  args: {
    size: 'large',
    color: 'gray300',
    icon: '/images/ui/icon/button/icon-button-play-h50w50.png',
    text: 'play',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xlarge',
    color: 'pink',
    icon: '/images/ui/icon/button/icon-button-play-h50w50.png',
    text: 'play',
  },
};
