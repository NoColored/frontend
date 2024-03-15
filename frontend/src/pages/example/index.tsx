import RoundCornerImageBox from '../../components/imagebox/RoundCornerImageBox';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';
import ColoredIconButton from '@/components/button/ColoredIconButton/index.tsx';
// import Game from '@/components/Game.tsx';

import TierBox from '@/components/imagebox/TierIconBox';
import PlayerInfoBox from '@/components/PlayerInfoBox';
import ColoredTextBox from '@/components/textbox/ColoredTextBox/index.tsx';
import InputTextBox from '@/components/textbox/InputTextBox/index.tsx';
import LabeledTextBox from '@/components/textbox/LabeledTextBox/index.tsx';

import groupIcon from '@/assets/ui/icon/button/icon-button-collection-h50w50.png';
import testIcon from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  return (
    <div>
      <PlayerInfoBox
        label='칭호가들어가는데요아마열네'
        nickname='아룸다운코뿔소'
        imgSrc='src/assets/character/default-butterfly/character-default-butterfly-blue-h240w240.png'
      />
      <div>테스트버튼</div>
      <ColoredButton color='red' size='small' text='Ready' onClick={() => {}} />
      <div>테스트버튼</div>
      <ColoredButton
        color='navy'
        size='medium'
        text='Ready'
        onClick={() => {}}
      />
      <div>테스트버튼</div>
      <ColoredButton
        color='gray300'
        size='large'
        text='Ready'
        onClick={() => {}}
      />
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
        type='text'
        size='small'
        onChange={(e) => console.log(e.target.value)}
      />
      <InputTextBox
        placeholder='회원가입 모달 창에 사용'
        size='medium'
        type='text'
        onChange={(e) => console.log(e.target.value)}
      />
      <InputTextBox
        placeholder='Login, PW 사용'
        type='password'
        size='large'
        onChange={(e) => console.log(e.target.value)}
      />
      <div>텍스트 컴포넌트</div>
      <ColoredTextBox text='text' color='red' icon={testIcon} />
      {/* <Game /> */}
      <div>
        <LabeledTextBox
          labelText='라벨이에용'
          contentText='타이틀이에용닉네임들어가죠'
          labelColor='white'
        />
      </div>
      <RoundCornerImageBox
        children={<div>children</div>}
        size='large'
        imgSrc='src/assets/character/default-butterfly/character-default-butterfly-blue-h240w240.png'
        borderColor='pink'
      />
      <RoundCornerImageBox
        size='full'
        imgSrc='src/assets/character/default-butterfly/character-default-butterfly-blue-h240w240.png'
        borderColor='pink'
        borderSize='5x'
        backgroundColor='white'
      />
      <TierBox tier='colored' size='xlarge' />
    </div>
  );
};

export default Example;
