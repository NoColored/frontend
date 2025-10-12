import PlayerInfo from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'components/PlayerInfoBox',
  component: PlayerInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'text',
    nickname: 'text',
    imgSrc: 'text',
  },
} satisfies Meta<typeof PlayerInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '너 나보다 못하잖아',
    nickname: '민돌멩이',
    imgSrc: '/images/character/character-default-sunglass-yellow-h240w240.png',
  },
};

export const Guest: Story = {
  args: {
    label: '파릇파릇 새싹',
    nickname: '나는야 게스트',
    imgSrc: '/images/character/character-default-basic-blue-h240w240.png',
  },
};
