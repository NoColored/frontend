import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import ColoredButton from '@/components/button/ColoredButton';

import ResultInfoBox, {
  ResultInfoBoxProps,
} from '@/pages/result/ResultInfoBox';

import TESTCHARACTER from '@/assets/character/default-magichat/character-default-magichat-blue-h240w240.png';

const Result = () => {
  // test data 입니다. 이것은 추후에 수정되어야 함.
  const resultExample: ResultInfoBoxProps[] = [
    {
      rank: 1,
      imgSrc: TESTCHARACTER,
      label: '칭호인데요제발요칭호라고요열네자?',
      nickname: '닉네임은아홉글자일',
      colorStyle: 'pink',
      gameScore: 67,
    },
    {
      rank: 2,
      imgSrc: TESTCHARACTER,
      label: '칭호인데요제발요칭호라고요열네자?',
      nickname: '닉네임은아홉글자일',
      colorStyle: 'yellow',
      gameScore: 56,
    },
    {
      rank: 3,
      imgSrc: TESTCHARACTER,
      label: '칭호인데요제발요칭호라고요열네자?',
      nickname: '닉네임은아홉글자일',
      colorStyle: 'green',
      gameScore: 23,
    },
    {
      rank: 4,
      imgSrc: TESTCHARACTER,
      label: '칭호인데요제발요칭호라고요열네자?',
      nickname: '닉네임은아홉글자일',
      colorStyle: 'blue',
      gameScore: 12,
    },
  ];

  return (
    <BasicContentFrame>
      <div className={styles.gameResultWrapper}>
        <div className={styles.resultTextWrapper}>GAME RESULT!</div>

        {resultExample.map((item) => (
          <div>
            {item.rank == 1 ? (
              <ResultInfoBox
                rank={item.rank}
                imgSrc={item.imgSrc}
                label={item.label}
                nickname={item.nickname}
                colorStyle={item.colorStyle}
                gameScore={item.gameScore}
                firstResult
              />
            ) : (
              <ResultInfoBox
                rank={item.rank}
                imgSrc={item.imgSrc}
                label={item.label}
                nickname={item.nickname}
                colorStyle={item.colorStyle}
                gameScore={item.gameScore}
              />
            )}
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <ColoredButton
            text='나가기'
            color='gray300'
            size='small'
            onClick={() => {}}
          />
          <ColoredButton
            text='더하기'
            color='navy'
            size='small'
            onClick={() => {}}
          />
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Result;
