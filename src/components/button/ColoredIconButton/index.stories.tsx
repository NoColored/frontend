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
    icon: {
      control: false,
    },
    text: {
      control: 'text',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ColoredIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Play: Story = {
  args: {
    size: 'medium',
    color: 'red',
    icon: './images/ui/icon/button/icon-button-play-h50w50.png',
    text: 'Play',
  },
};

export const Collection: Story = {
  args: {
    size: 'medium',
    color: 'blue',
    icon: './images/ui/icon/button/icon-button-collection-h50w50.png',
    text: 'Collection',
  },
};

export const Ranking: Story = {
  args: {
    size: 'medium',
    color: 'green',
    icon: './images/ui/icon/button/icon-button-ranking-h50w50.png',
    text: 'Ranking',
  },
};

export const FriendlyMatch: Story = {
  args: {
    size: 'xlarge',
    color: 'pink',
    icon: './images/ui/icon/button/icon-button-modemulti-h50w50.png',
    text: '친선전',
  },
};

export const RankedMatch: Story = {
  args: {
    size: 'xlarge',
    color: 'yellow',
    icon: './images/ui/icon/button/icon-button-moderank-h50w50.png',
    text: '랭킹전',
  },
};

const width = '200px';

export const GameReady: Story = {
  args: {
    size: 'large',
    color: 'gray300',
    icon: './images/ui/icon/shape/icon-shape-white-big-player1-h48w48.png',
    text: '준비취소',
  },
  render: (args: Required<Story['args']>) => {
    if (args.color !== 'gray300') {
      args.text = '게임준비';
    }
    return (
      <div style={{ width }}>
        <ColoredIconButton {...args} />
      </div>
    );
  },
};

export const GameStart: Story = {
  args: {
    size: 'large',
    color: 'blue',
    icon: './images/ui/icon/shape/icon-shape-white-big-player3-h48w48.png',
    text: '게임시작',
  },
  render: (args: Required<Story['args']>) => {
    return (
      <div style={{ width }}>
        <ColoredIconButton {...args} />
      </div>
    );
  },
};
