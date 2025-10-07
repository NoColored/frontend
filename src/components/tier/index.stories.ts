import { size } from './index.css';
import Tier from './ui';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TIER } from '@/constants/tier';

const meta = {
  title: 'components/Tier',
  component: Tier,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tier: {
      control: 'radio',
      options: TIER,
    },
    size: {
      control: 'radio',
      options: Object.keys(size).filter((key) => key !== 'full'),
    },
  },
} satisfies Meta<typeof Tier>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Origin: Story = {
  args: {
    tier: 'origin',
    size: 'medium',
  },
};

export const Bronze: Story = {
  args: {
    tier: 'bronze',
    size: 'medium',
  },
};

export const Silver: Story = {
  args: {
    tier: 'silver',
    size: 'medium',
  },
};

export const Gold: Story = {
  args: {
    tier: 'gold',
    size: 'medium',
  },
};

export const Platinum: Story = {
  args: {
    tier: 'platinum',
    size: 'medium',
  },
};

export const Diamond: Story = {
  args: {
    tier: 'diamond',
    size: 'medium',
  },
};
