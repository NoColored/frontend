import Ranking from './ui';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'components/Ranking',
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
  component: Ranking,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    myRank: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    guest: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    player: {
      control: false,
    },
  },
  args: {
    player: {
      rank: 2,
      label: '노컬러랜드 명예 주민',
      nickname: 'CELINE',
      skin: './images/character/character-default-sunglass-yellow-h240w240.png',
      tier: 'rgb',
      rating: 6510,
    },
    guest: false,
    myRank: false,
  },
} satisfies Meta<typeof Ranking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MyRank: Story = {
  args: {
    myRank: true,
  },
};

export const Guest: Story = {
  args: {
    guest: true,
    player: {
      rank: 9999,
      label: '손님',
      nickname: '허스키한 자라',
      skin: './images/character/character-default-none-clone-h240w240.png',
      tier: 'nocolored',
      rating: 2000,
    },
  },
};
