import ColoredIconButton from '@/components/button/ColoredIconButton/index.tsx';
// import Game from '@/components/Game.tsx';

import InputTextBox from '@/components/InputTextBox/index.tsx';

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
        onClick={() => {}}
      />
      <div>테스트버튼</div>
      <ColoredIconButton
        color='pink'
        icon={testIcon}
        size='medium'
        text='미디엄임'
        onClick={() => {}}
      />
      <div>테스트버튼</div>
      <ColoredIconButton
        color='navy'
        icon={groupIcon}
        size='xlarge'
        text='엑스라지임'
        onClick={() => {}}
      />
      <InputTextBox
        placeholder='전부 모달 창에 사용'
        size='small'
        onChange={(e) => console.log(e.target.value)}
      />
      <InputTextBox
        placeholder='회원가입 모달 창에 사용'
        size='medium'
        onChange={(e) => console.log(e.target.value)}
      />
      <InputTextBox
        placeholder='Login, PW 사용'
        size='large'
        onChange={(e) => console.log(e.target.value)}
      />
      {/* <Game /> */}
    </div>
  );
};

export default Example;
