import { Meta, StoryObj } from '@storybook/react-vite';

import { color } from './variants.css';

import Chip from '@/components/chip';
import ImageBox from '@/components/image-box';

import * as styles from '@/pages/play/lobby/index.css';

const meta = {
  title: 'components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: Object.keys(color),
    },
    responsive: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: false,
    },
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'navy',
    text: 'Text',
    responsive: false,
  },
};

export const MapInfo: Story = {
  args: {
    color: 'navy',
    text: '팩토리',
    responsive: false,
  },
  render: (args) => {
    return (
      <ImageBox
        size='medium'
        borderSize='1x'
        borderColor='black'
        imgSrc='/images/map/background/factorymap.png'
      >
        <Chip {...args} />
      </ImageBox>
    );
  },
};

export const RoomInfo: Story = {
  args: {
    color: 'red',
    text: '코드번호',
    responsive: false,
  },
  render: (args) => {
    return (
      <div className={styles.settings}>
        <div className={styles.code}>0000</div>
        <Chip {...args} />
      </div>
    );
  },
};

export const PlayerState: Story = {
  args: {
    responsive: true,
    color: 'blue',
    text: 'READY',
    icon: '/images/ui/icon/shape/icon-shape-white-small-player3-h16w16.png',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: Object.keys(color).filter((key) => key !== 'navy'),
    },
  },
  render: (args) => {
    const borderColor = args.color as Exclude<Story['args']['color'], 'navy'>;
    return (
      <ImageBox
        size='large'
        borderSize='5x'
        borderColor={borderColor}
        backgroundColor='white'
        imgSrc='/images/character/character-default-sunglass-yellow-h240w240.png'
      >
        <Chip {...args} />
      </ImageBox>
    );
  },
};
