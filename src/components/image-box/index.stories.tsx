import { backgroundColor, borderColor, borderSize, size } from './index.css';

import ImageBox from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import { styles } from '@/pages/collection/index.css';

const meta = {
  title: 'components/image',
  component: ImageBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgSrc: {
      control: false,
    },
    size: {
      control: 'radio',
      options: Object.keys(size).filter((key) => key !== 'full'),
    },
    borderSize: {
      control: 'radio',
      options: Object.keys(borderSize),
    },
    borderColor: {
      control: 'radio',
      options: Object.keys(borderColor),
    },
    backgroundColor: {
      control: 'radio',
      options: Object.keys(backgroundColor),
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ImageBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Skin = {
  args: {
    size: 'medium',
    imgSrc: '/images/character/character-default-sunglass-yellow-h240w240.png',
    borderSize: '1x',
    borderColor: 'black',
    backgroundColor: 'gray200',
  },
  render: (args: Story['args']) => (
    <ImageBox {...args}>
      {args.backgroundColor === 'gray200' && (
        <div className={styles.mosaicBox}>
          <div className={styles.mosaic} />
        </div>
      )}
    </ImageBox>
  ),
};

export const Map: Story = {
  args: {
    size: 'medium',
    imgSrc: '/images/map/background/factorymap.png',
    borderSize: '1x',
    borderColor: 'black',
    children: <ColoredTextBox size='small' color='navy' text='팩토리' />,
  },
};

export const Player1 = {
  args: {
    size: 'large',
    imgSrc: '/images/character/character-default-none-clone-h240w240.png',
    borderSize: '5x',
    borderColor: 'pink',
    backgroundColor: 'white',
  },
  render: (args: Story['args']) => (
    <ImageBox {...args}>
      <ColoredTextBox
        size='medium'
        color={args.borderColor ?? 'pink'}
        text='방장'
        icon='/images/ui/icon/shape/icon-shape-white-small-player0-h16w16.png'
      />
    </ImageBox>
  ),
};

export const Player2 = {
  args: {
    size: 'large',
    imgSrc: '/images/character/character-default-sunglass-yellow-h240w240.png',
    borderSize: '5x',
    borderColor: 'green',
    backgroundColor: 'white',
  },
  render: (args: Story['args']) => (
    <ImageBox {...args}>
      <ColoredTextBox
        size='medium'
        color={args.borderColor ?? 'green'}
        text='READY'
        icon='/images/ui/icon/shape/icon-shape-white-small-player1-h16w16.png'
      />
    </ImageBox>
  ),
};
