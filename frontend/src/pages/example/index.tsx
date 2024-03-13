import ColoredIconButton from '@/components/button/colored-icon-button/index.tsx';
// import Game from '@/components/Game.tsx';

import testIcon from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  return (
    <div>
      <ColoredIconButton color='red' icon={testIcon} text='테스트' />
      {/* <Game /> */}
    </div>
  );
};

export default Example;
