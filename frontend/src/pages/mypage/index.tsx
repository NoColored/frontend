import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame';
import SettingTextButton from '@/components/button/SettingTextButton-Temp';

import Achievement from '@/pages/mypage/Achievement.tsx';
import Skin from '@/pages/mypage/Skin.tsx';
import Title from '@/pages/mypage/Title.tsx';

const Index = () => {
  const imgUrl =
    '/src/assets/character/default-butterfly/character-default-butterfly-blue-h240w240.png';

  return (
    <div>
      <BasicContentFrame>
        <div className={styles.categoryButton}>
          <SettingTextButton onClick={() => {}} size='small' colorStyle='black'>
            스킨
          </SettingTextButton>
          <SettingTextButton onClick={() => {}} size='small' colorStyle='black'>
            칭호
          </SettingTextButton>
          <SettingTextButton onClick={() => {}} size='small' colorStyle='black'>
            업적
          </SettingTextButton>
        </div>
        <div>
          <div className={styles.imageContainer}>
            <div className={styles.title}>칭호는 최대 12글자 입니다.</div>
            <img className={styles.characterImage} alt='21' src={imgUrl} />
          </div>
          <div className={styles.shadow} />
          <div className={styles.saveButton}>
            <SettingTextButton
              onClick={() => {}}
              size='small'
              colorStyle='realDark'
            >
              저장
            </SettingTextButton>
          </div>
        </div>
        <Skin />
        <Title />
        <Achievement />
      </BasicContentFrame>
    </div>
  );
};

export default Index;
