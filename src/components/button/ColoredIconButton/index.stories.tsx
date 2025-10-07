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
  decorators: [
    (Story) => (
      <div
        style={{
          width: '320px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
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

export const Color: Story = {
  args: {
    size: 'medium',
    color: 'red',
    icon: '/images/ui/icon/button/icon-button-play-h50w50.png',
    text: 'play',
  },
};

export const Collection: Story = {
  args: {
    size: 'medium',
    color: 'blue',
    icon: '/images/ui/icon/button/icon-button-collection-h50w50.png',
    text: 'Collection',
  },
};

export const Play: Story = {
  args: {
    size: 'large',
    color: 'pink',
    icon: '/images/ui/icon/shape/icon-shape-white-big-player0-h48w48.png',
    text: '게임시작',
  },
};

export const Ranking: Story = {
  args: {
    size: 'xlarge',
    color: 'yellow',
    icon: '/images/ui/icon/button/icon-button-moderank-h50w50.png',
    text: '랭킹전',
  },
};
