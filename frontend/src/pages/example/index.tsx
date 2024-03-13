import ColoredIconButton from '@/components/button/colored-icon-button/index.tsx';
// import Game from '@/components/Game.tsx';

import groupIcon from '@/assets/ui/icon/button/icon-button-collection-h50w50.png';
import testIcon from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  return (
    <div>
      <div>테스트버튼</div>
      <ColoredIconButton
        color='red'
        icon={testIcon}
        size='large'
        text='READY'
      />
      <div>테스트버튼</div>
      <ColoredIconButton
        color='pink'
        icon={testIcon}
        size='medium'
        text='미디엄임'
      />
      <div>테스트버튼</div>
      <ColoredIconButton
        color='navy'
        icon={groupIcon}
        size='xlarge'
        text='엑스라지임'
      />
      {/* <Game /> */}
    </div>
  );
};

export default Example;
