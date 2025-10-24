import PlayerInfo from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

import RankingComponent from '@/components/ranking';

import ResultInfoBox from '@/pages/result/ResultInfoBox';

const meta = {
  title: 'components/PlayerInfo',
  component: PlayerInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    nickname: {
      control: 'text',
    },
    imgSrc: {
      control: false,
    },
  },
  args: {
    label: '너 나보다 못하잖아.',
    nickname: '민돌멩이',
    imgSrc: './images/character/character-default-sunglass-yellow-h240w240.png',
  },
} satisfies Meta<typeof PlayerInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ranking: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    return (
      <RankingComponent
        player={{
          rank: 4,
          label: args.label,
          nickname: args.nickname,
          skin: args.imgSrc,
          tier: 'rgb',
          rating: 5750,
        }}
      />
    );
  },
};

export const GameResult: Story = {
  args: {
    label: '손님',
    nickname: '허스키한 자라',
    imgSrc: './images/character/character-default-none-clone-h240w240.png',
  },
  render: (args) => {
    return (
      <ResultInfoBox
        player={{
          rank: 2,
          label: args.label,
          skin: args.imgSrc,
          nickname: args.nickname,
          score: 7,
          index: 1,
          userCode: '',
        }}
        myResult={false}
      />
    );
  },
};

export const MyGameResult: Story = {
  render: (args) => {
    return (
      <ResultInfoBox
        player={{
          rank: 1,
          label: args.label,
          skin: args.imgSrc,
          nickname: args.nickname,
          score: 13,
          index: 3,
          userCode: '',
        }}
        myResult
      />
    );
  },
};
